import useWindowSize from "@rooks/use-window-size";
import React, { CSSProperties, FC, useMemo } from "react";
import styles from "./style.module.scss";
import ComicsList from "components/organisms/ComicsList";
import Footer from "components/organisms/Footer";
import Header, { HeaderProps } from "components/organisms/Header";

export type TopProps = Pick<
  HeaderProps,
  | "canAddHome"
  | "canUpdate"
  | "displayName"
  | "enabledAddHome"
  | "enabledUpdate"
  | "handleClickAddHome"
  | "handleClickLogout"
  | "handleClickUpdate"
  | "photoUrl"
>;

const Top: FC<TopProps> = ({
  canAddHome,
  canUpdate,
  displayName,
  enabledAddHome,
  enabledUpdate,
  handleClickAddHome,
  handleClickLogout,
  handleClickUpdate,
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
          canAddHome={canAddHome}
          canUpdate={canUpdate}
          displayName={displayName}
          enabledAddHome={enabledAddHome}
          enabledUpdate={enabledUpdate}
          handleClickAddHome={handleClickAddHome}
          handleClickLogout={handleClickLogout}
          handleClickUpdate={handleClickUpdate}
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
