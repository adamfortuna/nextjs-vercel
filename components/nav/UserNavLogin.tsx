import { signIn } from 'next-auth/client'

export default function UserNavLogin() {
  return (
    <div className="hidden lg:block lg:ml-4 flex flex-row">
      <a href="/auth/signin" className="rounded hover:bg-indigo-700 p-2" onClick={() => signIn()}>
        Login or Sign Up
      </a>
    </div>
  )
}