import ActiveLink from '@components/ActiveLink'
import { BellIcon } from '@heroicons/react/outline'
import { signOut } from 'next-auth/client'
import { url } from 'gravatar'
import ThemeChangerWrapper from '@components/nav/ThemeChangerWrapper'

export default function UserNavSmall({ user }:any) {
  let avatarUrl = user.picture || url(user.email, {r: 'pg', s: '256'})
  let profileUrl = `/profiles/${user.username ? user.username : user.id}`

  return (
    <div className="pt-4 pb-3 border-t border-gray-700 dark:border-gray-600">
      <div className="flex items-center px-5">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src={avatarUrl}
            alt=""
          />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-gray-700 dark:text-white">{user.name}</div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{user.email}</div>
        </div>
        <div className="flex-grow flex justify-end items-center">
          <button className="mr-2 flex-shrink-0 dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-gray-800 dark:hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <ThemeChangerWrapper></ThemeChangerWrapper>
        </div>
      </div>
      <div className="mt-3 px-2 space-y-1">
        <ActiveLink href={profileUrl} active='bg-grey-700 text-white' inactive='hover:text-white hover:bg-gray-700'>
          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-400">Your Profile</a>
        </ActiveLink>
        <ActiveLink href="/account" active='bg-grey-700 text-white' inactive='hover:text-white hover:bg-gray-700'>
          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-400">Settings</a>
        </ActiveLink>
        <button className='block px-3 py-2 rounded-md w-full text-left text-base font-medium text-gray-700 dark:text-gray-400 hover:text-white hover:bg-gray-700' onClick={() => signOut()}>Sign out</button>
      </div>
    </div>
  )
}