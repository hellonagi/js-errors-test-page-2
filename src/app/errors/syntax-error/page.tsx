import Script from 'next/script'
export default function SyntaxErrorPage() {
  return (
    <>
      <h1>SyntaxError Page</h1>
      <Script
        id='syntax-error'
        dangerouslySetInnerHTML={{
          __html: `
            throw new SyntaxError("Syntax errorが発生しました", "syntax-error.js", 4)
          `,
        }}
      />
    </>
  )
}
