import "ress";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { FC } from "react";
import "../../styles/global.scss";
import NoSSR from "react-no-ssr";
import "../../styles/firebaseui-styling.global.scss";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat&display=swap&text=Twiv"
        rel="stylesheet"
      />
    </Head>
    <NoSSR>
      <Component {...pageProps} />
    </NoSSR>
  </>
);

export default MyApp;
