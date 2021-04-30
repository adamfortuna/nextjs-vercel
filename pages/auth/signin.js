// This page can be accessed directly, or through an iframe

import { getCsrfToken } from 'next-auth/client'
import { PaperAirplaneIcon } from '@heroicons/react/outline'

function SignIn({ csrfToken }) {
  return (
    <form action="/api/auth/signin/email" method="POST" className="space-y-6">
      <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email address
        </label>
        <div className="mt-1 mx-0.5">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus="autoFocus"
            required
            className="text-gray-800 dark:text-gray-300 dark:bg-gray-600 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PaperAirplaneIcon className="h-6 w-6 transform rotate-45 -mt-1 mr-2"></PaperAirplaneIcon>
          Send Magic Link
        </button>
      </div>
    </form>
  )
}

SignIn.layout = 'none'
export default SignIn

export async function getServerSideProps(context){
  const csrfToken = await getCsrfToken(context)

  return {
    props: { csrfToken }
  }
}