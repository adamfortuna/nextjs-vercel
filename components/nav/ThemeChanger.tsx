import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme()
  
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button className="flex-shrink-0 dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none" onClick={changeTheme}>
      <span className="sr-only">Toggle light and dark mode</span>
      {theme==='light' ? (
        <MoonIcon className="h-8 w-8 rounded hover:bg-gray-600 dark:bg-gray-700 p-1" aria-hidden="true" />
      ) : (
        <SunIcon className="h-8 w-8 rounded hover:bg-gray-600 dark:bg-gray-700 p-1" aria-hidden="true" />
      )}
    </button>
  )
}
