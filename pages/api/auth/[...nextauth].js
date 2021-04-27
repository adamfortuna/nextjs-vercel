import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import jwt from "jsonwebtoken";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    
    Providers.Email({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        },
      },
      from: process.env.SMTP_FROM
    }),
    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: { 
        teamId: process.env.APPLE_TEAM_ID,
        privateKey: process.env.APPLE_PRIVATE_KEY,
        keyId: process.env.APPLE_KEY_ID
      }
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  database: {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true,

    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    secret: process.env.SECRET,
    encode: async ({ secret, token, maxAge }) => {
      // console.log('next-auth: encode', 'secret', secret, 'token', token, maxAge, 'maxAge')
      const jwtClaims = {
        "id": token.id,
        "sub": token.sub.toString() ,
        "name": token.name ,
        "email": token.email,
        "picture": token.picture,
        "username": token.username,
        "iat": Math.floor(Date.now() / 1000),
        "exp": Math.floor(Date.now() / 1000) + (24*60*60),
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["user"],
          "x-hasura-default-role": "user",
          "x-hasura-role": "user",
          "X-hasura-user-id": token.id
        }
      };
      const encodedToken = jwt.sign(jwtClaims, secret, { algorithm: 'HS256'});
      return encodedToken;
    },
    decode: async ({ secret, token, maxAge }) => {
      // console.log('next-auth: decode', 'secret', secret, 'token', token, 'maxAge', maxAge)
      const decodedToken = jwt.verify(token, secret, { algorithms: ['HS256']});
      return decodedToken;
    }
  },

  // You can define custom pages to override the built-in ones. These will be regular Next.js pages
  // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    signIn: '/auth/signin',  // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: '/api/auth/signup' // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    // async signIn(user, account, profile) { return true },
    // async redirect(url, baseUrl) { return baseUrl },
    // async session(session, user) { return session },
    // async jwt(token, user, account, profile, isNewUser) { return token }
    async session(session, token) { 
      // console.log('next-auth: session', 'session', session, 'token', token)
      const encodedToken = jwt.sign(token, process.env.SECRET, { algorithm: 'HS256'});
      session.id = token.id;
      session.token = encodedToken;
      return Promise.resolve(session);
    },
    async jwt(token, user, account, profile, isNewUser) { 
      // console.log('next-auth: jwt', 'token', token, 'user', user, 'account', account, 'profile', profile, 'isNewUser', isNewUser)
      const isUserSignedIn = user ? true : false;
      
      if(isUserSignedIn) {
        // Todo:
        // Lookup user by user.id to get their username
        token.id = user.id.toString();
        token.picture = user.image;
        // token.username = lookupUser.user.username;
      }
      return Promise.resolve(token);
    }
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  logger: {
    error(code, ...message) {
      // console.error(code, message)
    },
    warn(code, ...message) {
      // console.warn(code, message)
    },
    debug(code, ...message) {
      // console.debug(code, message)
    }
  }
})