import Script from 'next/script'
export default function EvalErrorPage() {
  return (
    <>
      <h1>InternalError Page</h1>
      <Script
        id='internal-error'
        dangerouslySetInnerHTML={{
          __html: `
            eval('function loop(x) { if (x >= 1000000000000) return; loop(x + 1); } loop(0);')
          `,
        }}
      />
    </>
  )
}
