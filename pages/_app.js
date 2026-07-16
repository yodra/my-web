import '../styles.css';
import React from 'react';
import Head from 'next/head';

export default function MyWeb({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="alternate" type="application/rss+xml" title="Yodra López" href="/rss.xml" />
    </Head>
    <Component {...pageProps}/>
  </>;
}
