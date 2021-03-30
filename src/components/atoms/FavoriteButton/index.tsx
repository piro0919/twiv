import React, { FC } from "react";
import { RiBookmark3Line } from "react-icons/ri";
import styles from "./style.module.scss";

const FavoriteButton: FC = () => (
  <button className={styles.wrapper}>
    <RiBookmark3Line color="#fff" size={20} />
    <span className={styles.text}>本棚に追加する</span>
  </button>
);

export default FavoriteButton;
