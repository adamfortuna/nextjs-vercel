import { useState } from 'react'
import ThemeChanger from '@components/nav/ThemeChanger'
import LoginModal from './LoginModal'

export default function UserNavLogin() {
  const [open, setOpen] = useState(false)

  return (
    <div className="hidden lg:block lg:ml-4 flex flex-row items-center">
      <ThemeChanger></ThemeChanger>
      <a href='/auth/signin' className="ml-2 rounded hover:bg-indigo-700 hover:text-white p-2" onClick={(e) => { e.preventDefault(); setOpen(true) }}>
        Login
      </a>

      <LoginModal open={open} setOpen={setOpen}></LoginModal>
    </div>
  )
}