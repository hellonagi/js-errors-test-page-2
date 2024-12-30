import Script from 'next/script'
export default function URIErrorPage() {
  return (
    <>
      <h1>URIError Page</h1>
      <Script
        id='uri-error'
        dangerouslySetInnerHTML={{
          __html: `
            throw new URIError("URI Errorが発生しました", "uri-error.js", 6)
          `,
        }}
      />
    </>
  )
}
