import { cloneElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavLink({ href, active, inactive, children }) {
  const router = useRouter()

  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} ${active}`
  } else {
    className = `${className} ${inactive}`
  }

  return <Link href={href}>{cloneElement(children, { className })}</Link>
}
