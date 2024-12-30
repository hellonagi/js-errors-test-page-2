import Script from 'next/script'
export default function AggregateErrorPage() {
  return (
    <>
      <h1>AggregateError Page</h1>
      <Script
        id='aggregate-error'
        dangerouslySetInnerHTML={{
          __html: `
            throw new AggregateError([new Error("some Error")], "Aggregate Errorが発生しました");
          `,
        }}
      />
    </>
  )
}
