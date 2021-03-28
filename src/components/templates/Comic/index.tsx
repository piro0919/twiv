import React, { FC } from "react";
import ComicViewer, { ComicViewerProps } from "react-comic-viewer";
import styles from "./style.module.scss";
import Heading1 from "components/atoms/Heading1";

export type ComicProps = Pick<ComicViewerProps, "pages">;

const Comic: FC<ComicProps> = ({ pages }: ComicProps) => (
  <div>
    <div className={styles.heading1Wrapper}>
      <Heading1 />
    </div>
    <ComicViewer
      pages={pages}
      text={{
        expansion: "拡大",
        fullScreen: "全画面",
        move: "移動",
        normal: "通常",
      }}
    />
    <h2>【創作】合コンに行ったら女がいなかった話</h2>
  </div>
);

export default Comic;
