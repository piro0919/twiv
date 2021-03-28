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
      <header>
        <StyledFirebaseAuth firebaseAuth={firebaseAuth} uiConfig={uiConfig} />
      </header>
      <div>
        <Heading1 />
      </div>
    </div>
  );
};

export default Public;
