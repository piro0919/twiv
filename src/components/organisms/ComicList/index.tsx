import React, { FC } from "react";
import styles from "./style.module.scss";
import ComicItem from "components/molecules/ComicItem";

const ComitList: FC = () => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <ComicItem />
    </li>
    <li className={styles.item}>
      <ComicItem />
    </li>
    <li className={styles.item}>
      <ComicItem />
    </li>
    <li className={styles.item}>
      <ComicItem />
    </li>
    <li className={styles.item}>
      <ComicItem />
    </li>
    <li className={styles.item}>
      <ComicItem />
    </li>
    <li className={styles.item}>
      <ComicItem />
    </li>
    <li className={styles.item}>
      <ComicItem />
    </li>
    <li className={styles.item}>
      <ComicItem />
    </li>
    <li className={styles.item}>
      <ComicItem />
    </li>
    <li className={styles.item}>
      <ComicItem />
    </li>
    <li className={styles.item}>
      <ComicItem />
    </li>
  </ul>
);

export default ComitList;
