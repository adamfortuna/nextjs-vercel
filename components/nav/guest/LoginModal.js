/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { RefreshIcon } from '@heroicons/react/outline'
import { useState } from 'react'

export default function LoginModal({open, setOpen}) {
  const [loaded, setLoaded] = useState(false)

  const closeModal = (state) => {
    setOpen(state)
    setTimeout(()=> setLoaded(false), 1000)
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" open={open} onClose={closeModal}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg px-4 py-5 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              {!loaded ? (
                <div className="p-8 flex justify-center">
                <RefreshIcon className="animate-spin w-12 h-12 place-self-center" />
              </div>
              ) : null}

              <iframe src="/auth/signin" onLoad={setLoaded} className="min-w-full h-64 overflow-hidden bg-white dark:bg-gray-800" style={{ "height": (loaded ? "440px" : "1px"), "opacity": (loaded ? "1" : "0") }}></iframe>


              <button></button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}