import Link from './Link'

export default function Nav() {
  return (
    <nav>
      <div className="container mx-auto">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center md:hidden">
              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>

                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <a href="#" className="flex flex-row items-center rounded hover:bg-indigo-700 p-2">
                  <svg class="h-8 w-auto text-indigo-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M575.11 443.25L461.51 19.06C458.2 6.7 445.61-3.18 430.15.96L414.7 5.1c-6.18 1.66-11.53 6.4-16.06 14.24-14.03 6.94-52.3 17.21-68 18.22-7.84-4.53-14.85-5.96-21.03-4.3l-15.46 4.14c-2.42.65-4.2 1.95-6.15 3.08V32c0-17.67-14.33-32-32-32h-64c-17.67 0-32 14.33-32 32v64h128l101.66 396.94c3.31 12.36 15.9 22.24 31.36 18.1l15.45-4.14c6.18-1.66 11.53-6.4 16.06-14.24 13.91-6.88 52.18-17.2 68-18.22 7.84 4.53 14.85 5.96 21.03 4.3l15.46-4.14c15.45-4.14 21.41-18.99 18.09-31.35zm-134.4-7.06L348.64 92.37l61.82-16.56 92.07 343.82-61.82 16.56zM0 384h128V128H0v256zM96 0H32C14.33 0 0 14.33 0 32v64h128V32c0-17.67-14.33-32-32-32zM0 480c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64H0v64zm160-96h128V128H160v256zm0 96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64H160v64z"></path></svg>
                  <span className="font-bold text-xl ml-2">Untitled Book Site</span>
                </a>
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">

              <Link href="/books" active="bg-gray-900 text-white" inactive="hover:bg-gray-700 hover:text-white">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Books</a>
              </Link>
              <Link href="/lists" active="bg-gray-900 text-white" inactive="hover:bg-gray-700 hover:text-white">
                <a href="#" className="text-gray-300  px-3 py-2 rounded-md text-sm font-medium">Lists</a>
              </Link>
              <Link href="/calendar" active="bg-gray-900 text-white" inactive="hover:bg-gray-700 hover:text-white">
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-2">
                <span className="sr-only">Search</span>

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>


              <button type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">

                <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                <span>Log</span>
              </button>
            </div>
            <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">


              <div className="ml-3 relative">
                <div>
                  <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=l5dKLRa5sA&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>

                <div className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">

                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>

                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>

                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
        </div>

        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5 sm:px-6">
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
          <div className="mt-3 px-2 space-y-1 sm:px-3 hidden">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>

            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>

            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
          </div>
        </div>
      </div>
    </nav>

    //
    // <nav className="container mx-auto py-4 mb-4 border-b border-gray-500 flex justify-between items-center">
    //
    //   <Link href="/">
    //     <a className="text-2xl">BookSite</a>
    //   </Link>
    //
    //   <ul className="uppercase font-semibold text-sm">
    //     <li>
    //       <Link href="/books">
    //         <a>Books</a>
    //       </Link>
    //     </li>
    //
    //     <li>
    //       <Link href="/lists">
    //         <a>Lists</a>
    //       </Link>
    //     </li>
    //   </ul>
    //
    // </nav>
  )
}
