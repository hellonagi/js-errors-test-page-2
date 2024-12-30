import Script from 'next/script'
export default function ReferenceErrorPage() {
  return (
    <>
      <h1>ReferenceError Page</h1>
      <Script
        id='reference-error'
        dangerouslySetInnerHTML={{
          __html: `
            throw new ReferenceError("Reference Errorが発生しました", "reference-error.js", 3)
          `,
        }}
      />
    </>
  )
}
