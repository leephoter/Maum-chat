import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/global.scss';

export default function (props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>{'Maum Chatting'}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
