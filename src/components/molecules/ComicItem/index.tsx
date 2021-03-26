import Link from "next/link";
import React, { FC } from "react";
import styles from "./style.module.scss";

const ComicItem: FC = () => (
  <Link href="/comics/hoge">
    <div className={styles.wrapper}>
      <div className={styles.thumbnailWrapper}>
        <img
          alt="サムネイル"
          className={styles.thumbnail}
          src="/hoge/thumbnail.jpg"
        />
      </div>
      <div>
        <div className={styles.title}>合コンに行ったら女がいなかった話</div>
        <div className={styles.auther}>蒼川なな</div>
      </div>
    </div>
  </Link>
);

export default ComicItem;
