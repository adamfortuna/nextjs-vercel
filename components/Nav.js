import { Menu, Transition } from "@headlessui/react";
// import { render } from "@headlessui/react/dist/utils/render";
import Link from './Link'
import { Machine, assign } from "xstate";
import { useMachine } from "@xstate/react";
import { createMachine } from 'xstate';

const navMachine = createMachine({
  id: 'navMachine',
  initial: 'closed',
  states: {
    closed: { on: { TOGGLE_MOBILE_NAV: 'open' } },
    open: { on: { TOGGLE_MOBILE_NAV: 'closed' } }
  }
});

export default function Nav(){
  const [current, send] = useMachine(navMachine)


  const userMenu = (
    <div className="ml-4 relative flex-shrink-0">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=l5dKLRa5sA&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </Menu.Button>

            <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
              <Menu.Items static className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                <Menu.Item>
                  <Link href="/profiles/username" active="bg-gray-100" inactive="hover:bg-gray-100">
                    <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Your Profile</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/account" active="bg-gray-100" inactive="hover:bg-gray-100">
                    <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Settings</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/api/auth/logout" active="bg-gray-100" inactive="hover:bg-gray-100">
                    <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Sign out</a>
                  </Link>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
  
  
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center px-2 lg:px-0">
            <div className="flex-shrink-0">
              <Link href="/">
                <a href="#" className="flex flex-row items-center rounded hover:bg-indigo-700 p-2">
                  <svg className="h-8 w-auto text-indigo-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M575.11 443.25L461.51 19.06C458.2 6.7 445.61-3.18 430.15.96L414.7 5.1c-6.18 1.66-11.53 6.4-16.06 14.24-14.03 6.94-52.3 17.21-68 18.22-7.84-4.53-14.85-5.96-21.03-4.3l-15.46 4.14c-2.42.65-4.2 1.95-6.15 3.08V32c0-17.67-14.33-32-32-32h-64c-17.67 0-32 14.33-32 32v64h128l101.66 396.94c3.31 12.36 15.9 22.24 31.36 18.1l15.45-4.14c6.18-1.66 11.53-6.4 16.06-14.24 13.91-6.88 52.18-17.2 68-18.22 7.84 4.53 14.85 5.96 21.03 4.3l15.46-4.14c15.45-4.14 21.41-18.99 18.09-31.35zm-134.4-7.06L348.64 92.37l61.82-16.56 92.07 343.82-61.82 16.56zM0 384h128V128H0v256zM96 0H32C14.33 0 0 14.33 0 32v64h128V32c0-17.67-14.33-32-32-32zM0 480c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64H0v64zm160-96h128V128H160v256zm0 96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64H160v64z"></path></svg>
                  <span className="font-bold text-xl ml-2 hidden lg:block">Untitled Book Site - {current.context.navOpen}</span>
                </a>
              </Link>
            </div>
            <div className="hidden lg:block lg:ml-6">
              <div className="flex space-x-4">
                <Link href="/activity" active="bg-gray-900 text-white" inactive="hover:bg-gray-700 hover:text-white">
                  <a className="text-gray-300  px-3 py-2 rounded-md text-sm font-medium">Activity</a>
                </Link>
                <Link href="/books" active="bg-gray-900 text-white" inactive="hover:bg-gray-700 hover:text-white">
                  <a className="px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Books</a>
                </Link>
                <Link href="/lists" active="bg-gray-900 text-white" inactive="hover:bg-gray-700 hover:text-white">
                  <a className="text-gray-300  px-3 py-2 rounded-md text-sm font-medium">Lists</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input id="search" name="search" className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm" placeholder="Search for a book, author or user" type="search" />
              </div>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={ current.matches('open') ? 'true' : 'false' } onClick={() => send('TOGGLE_MOBILE_NAV')}>
              <span className="sr-only">Open main menu</span>
              <svg className={ current.matches('open') ? ' h-6 w-6 hidden' : ' h-6 w-6 block'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={ current.matches('open') ? 'h-6 w-6 block' : 'h-6 w-6 hidden'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:block lg:ml-4">
            <div className="flex items-center">
              <button className="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              {userMenu}
            </div>
          </div>
        </div>
      </div>

      <div className={ `lg:hidden ${current.matches('open') ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/activity" active="bg-gray-900 text-white" inactive="text-gray-300 hover:bg-gray-700 hover:text-white">
            <a className="block px-3 py-2 rounded-md text-base font-medium">Activity</a>
          </Link>
          <Link href="/books" active="bg-gray-900 text-white" inactive="text-gray-300 hover:bg-gray-700 hover:text-white">
            <a className="block px-3 py-2 rounded-md text-base font-medium">Books</a>
          </Link>
          <Link href="/lists" active="bg-gray-900 text-white" inactive="text-gray-300 hover:bg-gray-700 hover:text-white">
            <a className="block px-3 py-2 rounded-md text-base font-medium">Lists</a>
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=l5dKLRa5sA&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-white">Tom Cook</div>
              <div className="text-sm font-medium text-gray-400">tom@example.com</div>
            </div>
            <button className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <Link href="/profiles/adamfortuna">
              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>
            </Link>
            <Link href="/account">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>
            </Link>
            <Link href="/api/auth/logout">
              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
