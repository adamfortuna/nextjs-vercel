import ActiveLink from '@components/ActiveLink'
import Link from 'next/link'
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/client'

import UserNavLarge from '@components/nav/UserNavLarge'
import UserNavSmall from '@components/nav/UserNavSmall'
import UserNavLogin from '@components/nav/UserNavLogin'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  const [ session, loading ] = useSession()
  let userLarge, userSmall
  if(session?.user) {
    userLarge = <UserNavLarge user={session.user}></UserNavLarge>
    userSmall = <UserNavSmall user={session.user}></UserNavSmall>
  } else {
    userLarge = <UserNavLogin></UserNavLogin>
    userSmall = userLarge
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <a className="flex flex-row items-center rounded hover:bg-indigo-700 p-2">
                      <svg className="h-8 text-indigo-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M575.11 443.25L461.51 19.06C458.2 6.7 445.61-3.18 430.15.96L414.7 5.1c-6.18 1.66-11.53 6.4-16.06 14.24-14.03 6.94-52.3 17.21-68 18.22-7.84-4.53-14.85-5.96-21.03-4.3l-15.46 4.14c-2.42.65-4.2 1.95-6.15 3.08V32c0-17.67-14.33-32-32-32h-64c-17.67 0-32 14.33-32 32v64h128l101.66 396.94c3.31 12.36 15.9 22.24 31.36 18.1l15.45-4.14c6.18-1.66 11.53-6.4 16.06-14.24 13.91-6.88 52.18-17.2 68-18.22 7.84 4.53 14.85 5.96 21.03 4.3l15.46-4.14c15.45-4.14 21.41-18.99 18.09-31.35zm-134.4-7.06L348.64 92.37l61.82-16.56 92.07 343.82-61.82 16.56zM0 384h128V128H0v256zM96 0H32C14.33 0 0 14.33 0 32v64h128V32c0-17.67-14.33-32-32-32zM0 480c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64H0v64zm160-96h128V128H160v256zm0 96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64H160v64z"></path></svg>
                      <span className="font-bold text-xl ml-2 hidden lg:block">Untitled Book Site</span>
                    </a>
                  </Link>
                </div>
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4">
                    <ActiveLink href="/activity" active="bg-gray-900 text-white" inactive="hover:bg-gray-700 hover:text-white">
                      <a className="text-gray-300  px-3 py-2 rounded-md text-sm font-medium">Activity</a>
                    </ActiveLink>
                    <ActiveLink href="/books" active="bg-gray-900 text-white" inactive="hover:bg-gray-700 hover:text-white">
                      <a className="px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Books</a>
                    </ActiveLink>
                    <ActiveLink href="/lists" active="bg-gray-900 text-white" inactive="hover:bg-gray-700 hover:text-white">
                      <a className="text-gray-300  px-3 py-2 rounded-md text-sm font-medium">Lists</a>
                    </ActiveLink>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Logged / Not logged in full-size navigation */}
              {userLarge}
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <ActiveLink href="/activity" active="bg-gray-900 text-white" inactive="text-gray-300 hover:bg-gray-700 hover:text-white">
                <a className="text-white block px-3 py-2 rounded-md text-base font-medium">Activity</a>
              </ActiveLink>
              <ActiveLink href="/books" active="bg-gray-900 text-white" inactive="text-gray-300 hover:bg-gray-700 hover:text-white">
                <a className="text-white block px-3 py-2 rounded-md text-base font-medium">Books</a>
              </ActiveLink>
              <ActiveLink href="/lists" active="bg-gray-900 text-white" inactive="text-gray-300 hover:bg-gray-700 hover:text-white">
                <a className="text-white block px-3 py-2 rounded-md text-base font-medium">Lists</a>
              </ActiveLink>
            </div>
            {/* Logged / Not logged in mobile navigation */}
            {userSmall}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
