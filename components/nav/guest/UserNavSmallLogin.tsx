import { useState } from 'react'
import ThemeChangerWrapper from '@components/nav/ThemeChangerWrapper'
import LoginModal from './LoginModal'

export default function UserNavLogin() {
  const [open, setOpen] = useState(false)

  return (
    <div className="pt-4 pb-3 border-t border-gray-700 dark:border-gray-600">
      <div className="flex items-center px-5">
        <div className="flex-grow flex justify-end items-center">
          <ThemeChangerWrapper></ThemeChangerWrapper>
        </div>
      </div>
      <div className="mt-3 px-2 space-y-1">
        <a href='/auth/signin' className="ml-2 border border-gray-300 rounded hover:bg-indigo-700 hover:text-white p-2" onClick={(e) => { e.preventDefault(); setOpen(true) }}>
          Login
        </a>
        <LoginModal open={open} setOpen={setOpen}></LoginModal>
      </div>
    </div>
  )
}