import React, { FC, MouseEventHandler } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { GoSignOut } from "react-icons/go";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { ImDownload } from "react-icons/im";
import { RiImageAddLine, RiImageEditLine } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";
import styles from "./style.module.scss";

export type MenuProps = {
  canAddHome: boolean;
  canUpdate: boolean;
  enabledAddHome: boolean;
  enabledUpdate: boolean;
  handleClickAddHome: MouseEventHandler<HTMLButtonElement>;
  handleClickLogout: MouseEventHandler<HTMLButtonElement>;
  handleClickUpdate: MouseEventHandler<HTMLButtonElement>;
};

const Menu: FC<MenuProps> = ({
  canAddHome,
  canUpdate,
  enabledAddHome,
  enabledUpdate,
  handleClickAddHome,
  handleClickLogout,
  handleClickUpdate,
}: MenuProps) => {
  return (
    <aside className={styles.menu}>
      <button className={styles.button}>
        <SiMinutemailer color="#6b6b6b" size={32} />
        <div className={styles.title}>コンタクト</div>
      </button>
      {enabledAddHome ? (
        <button
          className={styles.button}
          disabled={!canAddHome}
          onClick={handleClickAddHome}
        >
          <HiOutlineViewGridAdd color="#6b6b6b" size={32} />
          <div className={styles.title}>ホームに追加</div>
        </button>
      ) : null}
      {enabledUpdate ? (
        <button
          className={styles.button}
          disabled={!canUpdate}
          onClick={handleClickUpdate}
        >
          <ImDownload color="#6b6b6b" size={32} />
          <div className={styles.title}>アプリを更新</div>
        </button>
      ) : null}
      <button className={styles.button}>
        <BiInfoCircle color="#6b6b6b" size={32} />
        <div className={styles.title}>Twivについて</div>
      </button>
      <button className={styles.button} onClick={handleClickLogout}>
        <GoSignOut color="#6b6b6b" size={32} />
        <div className={styles.title}>ログアウト</div>
      </button>
      <button className={styles.button}>
        <RiImageAddLine color="#6b6b6b" size={32} />
        <div className={styles.title}>アップロード</div>
      </button>
      <button className={styles.button}>
        <RiImageEditLine color="#6b6b6b" size={32} />
        <div className={styles.title}>管理</div>
      </button>
    </aside>
  );
};

export default Menu;
