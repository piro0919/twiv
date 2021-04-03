import useWindowSize from "@rooks/use-window-size";
import React, { CSSProperties, FC, useMemo } from "react";
import styles from "./style.module.scss";
import ComicsList from "components/organisms/ComicsList";
import Footer from "components/organisms/Footer";
import Header, { HeaderProps } from "components/organisms/Header";

export type TopProps = Pick<
  HeaderProps,
  "displayName" | "handleClickAddHome" | "handleClickLogout" | "photoUrl"
>;

const Top: FC<TopProps> = ({
  displayName,
  handleClickAddHome,
  handleClickLogout,
  photoUrl,
}: TopProps) => {
  const { innerHeight } = useWindowSize();
  const wrapperStyle = useMemo<CSSProperties>(
    () => ({ minHeight: innerHeight }),
    [innerHeight]
  );

  return (
    <div className={styles.wrapper} style={wrapperStyle}>
      <div>
        <Header
          displayName={displayName}
          handleClickAddHome={handleClickAddHome}
          handleClickLogout={handleClickLogout}
          photoUrl={photoUrl}
        />
        <div className={styles.comicsListWrapper}>
          <ComicsList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Top;
