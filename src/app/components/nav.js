import Link from 'next/link'
 
export default function Nav({ links }) {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <Link href={link.slug}>{link.title}</Link>
        </li>
      ))}
    </ul>
  )
}