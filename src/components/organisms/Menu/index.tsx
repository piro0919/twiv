import React, { FC, MouseEventHandler } from "react";
import { GoSignOut } from "react-icons/go";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { RiImageAddLine, RiImageEditLine } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";
import styles from "./style.module.scss";

export type MenuProps = {
  disabledPwa: boolean;
  handleClickAddHome: MouseEventHandler<HTMLButtonElement>;
  handleClickLogout: MouseEventHandler<HTMLButtonElement>;
};

const Menu: FC<MenuProps> = ({
  disabledPwa,
  handleClickAddHome,
  handleClickLogout,
}: MenuProps) => {
  return (
    <aside className={styles.menu}>
      <button className={styles.button}>
        <SiMinutemailer color="#222" size={32} />
        <div className={styles.title}>コンタクト</div>
      </button>
      <button
        className={styles.button}
        disabled={disabledPwa}
        onClick={handleClickAddHome}
      >
        <HiOutlineViewGridAdd color="#222" size={32} />
        <div className={styles.title}>ホームに追加</div>
      </button>
      <button className={styles.button} onClick={handleClickLogout}>
        <GoSignOut color="#222" size={32} />
        <div className={styles.title}>ログアウト</div>
      </button>
      <button className={styles.button}>
        <RiImageAddLine color="#222" size={32} />
        <div className={styles.title}>アップロード</div>
      </button>
      <button className={styles.button}>
        <RiImageEditLine color="#222" size={32} />
        <div className={styles.title}>管理</div>
      </button>
    </aside>
  );
};

export default Menu;
