import useWindowSize from "@rooks/use-window-size";
import React, { CSSProperties, FC, useMemo } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import styles from "./style.module.scss";
import Heading1 from "components/atoms/Heading1";
import firebaseAuth from "libs/firebaseAuth";
import uiConfig from "libs/uiConfig";

const Public: FC = () => {
  const { innerHeight } = useWindowSize();
  const wrapperStyle = useMemo<CSSProperties>(
    () => ({ minHeight: innerHeight }),
    [innerHeight]
  );

  return (
    <div className={styles.wrapper} style={wrapperStyle}>
      <header className={styles.header}>
        <StyledFirebaseAuth firebaseAuth={firebaseAuth} uiConfig={uiConfig} />
      </header>
      <main className={styles.main}>
        <div className={styles.heading1Wrapper}>
          <Heading1 />
        </div>
      </main>
    </div>
  );
};

export default Public;
