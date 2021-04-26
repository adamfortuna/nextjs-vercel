import Link from 'next/link'
import { Fragment } from 'react'
import { BellIcon } from '@heroicons/react/outline'
import { Menu, Transition } from '@headlessui/react'
import { signOut } from 'next-auth/client'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function UserNavLarge() {
  return (
    <div className="hidden lg:block lg:ml-4">
      <div className="flex items-center">
        <button className="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Profile dropdown */}
        <Menu as="div" className="ml-4 relative flex-shrink-0">
          {({ open }) => (
            <>
              <div>
                <Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/profiles/adamfortuna">
                        <a className={classNames(active ? 'bg-gray-100' : 'hover:bg-gray-100', 'block px-4 py-2 text-sm text-gray-700' )}>
                          Your Profile
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/account">
                        <a className={classNames(active ? 'bg-gray-100' : 'hover:bg-gray-100', 'block px-4 py-2 text-sm text-gray-700' )}>
                          Settings
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href='/logout' className={classNames(active ? 'bg-gray-100' : 'hover:bg-gray-100', 'block px-4 py-2 text-sm text-gray-700' )} onClick={() => signOut()}>
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  )
}