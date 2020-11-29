import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/play', label: 'The Making of a Play' },
  { href: '/history', label: 'History of Theatre' },
  { href: '/resources', label: 'Educational Resources' },
  { href: '/experience', label: 'COVID Experience' },
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
