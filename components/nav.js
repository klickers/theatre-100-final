import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'The Making of a Play' },
  { href: '/', label: 'History of Theatre' },
  { href: '/', label: 'Educational Resources' },
  { href: '/', label: 'COVID Experience' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav id="nav-main">
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
