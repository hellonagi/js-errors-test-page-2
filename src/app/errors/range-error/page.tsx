import Script from 'next/script'
export default function RangeErrorPage() {
  return (
    <>
      <h1>RangeError Page</h1>
      <Script
        id='range-error'
        dangerouslySetInnerHTML={{
          __html: `
            throw new RangeError("Range errorが発生しました", "range-error.js", 2)
          `,
        }}
      />
    </>
  )
}
