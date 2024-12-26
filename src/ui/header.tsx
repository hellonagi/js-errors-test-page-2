import Link from 'next/link'
import Script from 'next/script'

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Script
        id='intentional-error'
        dangerouslySetInnerHTML={{
          __html: `
              eval('foo bar');
          `,
        }}
      />
    </header>
  )
}
