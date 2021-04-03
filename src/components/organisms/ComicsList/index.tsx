import ComicsItem from "components/molecules/ComicsItem";
import React, { FC } from "react";
import styles from "./style.module.scss";

export type ComicsListProps = {
  isNarrow?: boolean;
};

const ComicsList: FC<ComicsListProps> = ({
  isNarrow = false,
}: ComicsListProps) => (
  <ul className={`${styles.list} ${isNarrow ? styles.narrow : ""}`}>
    <li className={styles.item}>
      <ComicsItem />
    </li>
    <li className={styles.item}>
      <ComicsItem />
    </li>
    <li className={styles.item}>
      <ComicsItem />
    </li>
    <li className={styles.item}>
      <ComicsItem />
    </li>
    <li className={styles.item}>
      <ComicsItem />
    </li>
    <li className={styles.item}>
      <ComicsItem />
    </li>
    <li className={styles.item}>
      <ComicsItem />
    </li>
    <li className={styles.item}>
      <ComicsItem />
    </li>
    <li className={styles.item}>
      <ComicsItem />
    </li>
    <li className={styles.item}>
      <ComicsItem />
    </li>
    <li className={styles.item}>
      <ComicsItem />
    </li>
    <li className={styles.item}>
      <ComicsItem />
    </li>
    <li className={styles.item}>
      <ComicsItem />
    </li>
  </ul>
);

export default ComicsList;
