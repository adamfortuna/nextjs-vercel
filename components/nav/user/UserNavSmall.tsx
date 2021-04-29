import ActiveLink from '@components/ActiveLink'
import { BellIcon } from '@heroicons/react/outline'
import { signOut } from 'next-auth/client'

export default function UserNavSmall({ user }:any) {
  return (
    <div className="pt-4 pb-3 border-t border-gray-700">
      <div className="flex items-center px-5">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-white">Tom Cook</div>
          <div className="text-sm font-medium text-gray-400">tom@example.com</div>
        </div>
        <button className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-3 px-2 space-y-1">
        <ActiveLink href="/profiles/adamfortuna" active='bg-grey-700 text-white' inactive='hover:text-white hover:bg-gray-700'>
          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-400">Your Profile</a>
        </ActiveLink>
        <ActiveLink href="/account" active='bg-grey-700 text-white' inactive='hover:text-white hover:bg-gray-700'>
          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-400">Settings</a>
        </ActiveLink>
        <button className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700' onClick={() => signOut()}>Sign out</button>
      </div>
    </div>
  )
}