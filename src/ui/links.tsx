import Link from 'next/link'

export default function Links() {
  return (
    <ul>
      <li>
        <Link href='/errors/eval-error'>EvalError</Link>
      </li>
      <li>
        <Link href='/errors/range-error'>RangeError</Link>
      </li>
      <li>
        <Link href='/errors/reference-error'>ReferenceError</Link>
      </li>
      <li>
        <Link href='/errors/syntax-error'>SyntaxError</Link>
      </li>
      <li>
        <Link href='/errors/type-error'>TypeError</Link>
      </li>
      <li>
        <Link href='/errors/uri-error'>URIError</Link>
      </li>
      <li>
        <Link href='/errors/aggregate-error'>AggregateError</Link>
      </li>
      <li>
        <Link href='/errors/internal-error'>InternalError</Link>
      </li>
    </ul>
  )
}
