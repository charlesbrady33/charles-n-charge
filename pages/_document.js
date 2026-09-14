import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@700;800&display=swap" rel="stylesheet" />
        <meta name="description" content="Charles n Charge - Professional Lawn & Property Maintenance Services in Marion, Indiana" />
        <meta name="keywords" content="lawn care, pressure washing, handyman, tree trimming, pest control, marion indiana" />
        <meta name="author" content="Charles n Charge" />
      </Head>
      <body className="bg-dark-bg text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
