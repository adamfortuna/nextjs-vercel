import dynamic from 'next/dynamic'

const ThemeChangerWrapper = dynamic(
    () => import('./ThemeChanger'),
    { ssr: false }
  )

export default function Example() {
  return <ThemeChangerWrapper />;
}