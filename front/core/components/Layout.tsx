import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Pocky SALON & STORE' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="/images/pocky-logo-dog.jpg" />
      <meta name="msapplication-TileColor" content="#ffffff"></meta>
      <meta name="theme-color" content="#ffffff"></meta>
      <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
    </Head>
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180×180"
        href="/favicon/apple-touch-icon.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32×32"
        href="/favicon/favicon-32×32.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="16×16"
        href="/favicon/favicon-16×16.png"
      ></link>
      <link rel="manifest" href="/favicon/site.webmanifest"></link>
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      ></link>
    </Head>
    {children}
  </div>
)

export default Layout
