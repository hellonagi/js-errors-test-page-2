import Script from 'next/script'
export default function TypeErrorPage() {
  return (
    <>
      <h1>TypeError Page</h1>
      <Script
        id='type-error'
        dangerouslySetInnerHTML={{
          __html: `
            throw new TypeError("Type errorが発生しました", "type-error.js", 5)
          `,
        }}
      />
    </>
  )
}
