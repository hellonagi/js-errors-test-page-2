import Link from 'next/link'

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
      <script>eval('foo bar')</script>
    </header>
  )
}
