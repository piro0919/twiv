import useWindowSize from "@rooks/use-window-size";
import React, { CSSProperties, FC, useMemo } from "react";
import styles from "./style.module.scss";
import Heading1 from "components/atoms/Heading1";
import ComicsDetail from "components/organisms/ComicsDetail";
import ComicsInformation from "components/organisms/ComicsInformation";
import ComicsSeries from "components/organisms/ComicsSeries";
import ComicsViewer, {
  ComicsViewerProps,
} from "components/organisms/ComicsViewer";
import Footer from "components/organisms/Footer";

export type ComicsProps = Pick<
  ComicsViewerProps,
  "handleChangeExpansion" | "initialIsExpansion" | "pages"
>;

const Comics: FC<ComicsProps> = ({
  handleChangeExpansion,
  initialIsExpansion,
  pages,
}: ComicsProps) => {
  const { innerHeight } = useWindowSize();
  const wrapperStyle = useMemo<CSSProperties>(
    () => ({ minHeight: innerHeight }),
    [innerHeight]
  );

  return (
    <div className={styles.wrapper} style={wrapperStyle}>
      <main>
        <div className={styles.heading1Wrapper}>
          <Heading1 />
        </div>
        <ComicsViewer
          handleChangeExpansion={handleChangeExpansion}
          initialIsExpansion={initialIsExpansion}
          pages={pages}
        />
        <div className={styles.inner}>
          <div className={styles.articlesWrapper}>
            <article className={`${styles.item} ${styles.detail}`}>
              <ComicsDetail />
            </article>
            <article className={`${styles.item} ${styles.series}`}>
              <ComicsSeries />
            </article>
            <article className={`${styles.item} ${styles.information}`}>
              <ComicsInformation />
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Comics;
