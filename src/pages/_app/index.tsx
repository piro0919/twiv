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
      <style global jsx>{`
        html body::before {
          display: ${process.env.NODE_ENV === "development" ? "block" : "none"};
        }
      `}</style>
    </Head>
    <NoSSR>
      <Component {...pageProps} />
    </NoSSR>
  </>
);

export default MyApp;
