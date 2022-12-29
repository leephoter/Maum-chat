import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/global.scss';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'utils/config';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';

export default function (props: AppProps) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const confirmedUrl = ['/home', '/login', '/register'];
  const sensitivePages = ['/home'];
  useEffect(() => {
    // 1. 정상 경로가 아니면 >> redirection
    if (!confirmedUrl.includes(router.pathname)) {
      router.push('/login');
    }
    // 2. 현재 로그인 상태 user 가 없을 때 + 로그인 후 접근 가능 페이지에 있을 때 >> redirection
    onAuthStateChanged(auth, (user) => {
      if (!user && sensitivePages.includes(router.pathname)) {
        router.push('/login');
      }
    });
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>{'Maum Chatting'}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
