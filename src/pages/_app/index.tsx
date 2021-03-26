import "ress";
import { AppProps } from "next/app";
import React, { FC } from "react";
import "../../styles/global.scss";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
