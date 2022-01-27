import NextHead from 'next/head'

const Head = ({ data }) => {

  return (
    <NextHead>
      <title>Daniela Haerle { data.title !== '' ? `| ${data.title}` : '' }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Diagnostik und Therpie von Kiefer-, Gesichts- und Kopfschmerzen Myoarthropathien des Kausystems Schlafapnoe"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#0b85a6" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff"></meta>
    </NextHead>
  )
};

export {
  Head
};