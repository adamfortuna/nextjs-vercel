import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import { Switch } from '@headlessui/react'

function classNames(...classes:String[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme()
  let enabled = (theme === 'dark')

  console.log('theme', theme)
  
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Switch
      checked={enabled}
      onChange={changeTheme}
      className={classNames(
        enabled ? 'bg-gray-600' : 'bg-gray-300',
        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-gray-200 shadow transform ring-0 transition ease-in-out duration-200'
        )}
      >
        <span
          className={classNames(
            enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <SunIcon className="h-4 w-4 text-gray-600" aria-hidden="true" />
        </span>
        <span
          className={classNames(
            enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <MoonIcon className="h-4 w-4 text-gray-600" aria-hidden="true" />
        </span>
      </span>
    </Switch>
  )
}
