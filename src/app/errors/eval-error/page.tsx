import Script from 'next/script'
export default function EvalErrorPage() {
  return (
    <>
      <h1>EvalError Page</h1>
      <Script
        id='eval-error'
        dangerouslySetInnerHTML={{
          __html: `
            throw new EvalError("Eval Errorが発生しました", "eval-error.js", 1)
          `,
        }}
      />
    </>
  )
}
