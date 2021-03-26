import useWindowSize from "@rooks/use-window-size";
import React, { CSSProperties, FC, useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import NoSSR from "react-no-ssr";
import styles from "./style.module.scss";
import Heading1 from "components/atoms/Heading1";
import firebase from "libs/firebase";
import uiConfig from "libs/uiConfig";

export type PublicProps = {
  firebaseAuth: firebase.auth.Auth;
};

const Public: FC<PublicProps> = ({ firebaseAuth }: PublicProps) => {
  const [wrapperStyle, setWrapperStyle] = useState<CSSProperties>();
  const { innerHeight } = useWindowSize();

  useEffect(() => {
    setWrapperStyle({ minHeight: innerHeight });
  }, [innerHeight]);

  return (
    <NoSSR>
      <div className={styles.wrapper} style={wrapperStyle}>
        <div className={styles.inner}>
          <div className={styles.heading1Wrapper}>
            <Heading1 />
          </div>
          <div className={styles.authWrapper}>
            <StyledFirebaseAuth
              firebaseAuth={firebaseAuth}
              uiConfig={uiConfig}
            />
          </div>
        </div>
      </div>
    </NoSSR>
  );
};

export default Public;
