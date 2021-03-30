import useOutsideClickRef from "@rooks/use-outside-click-ref";
import React, { FC, useCallback, useState } from "react";
import Menu, { MenuProps } from "../Menu";
import styles from "./style.module.scss";

export type HeaderProps = Pick<
  MenuProps,
  "handleClickAddHome" | "handleClickLogout"
> & {
  displayName: string;
  photoUrl: string;
};

const Header: FC<HeaderProps> = ({
  displayName,
  handleClickAddHome,
  handleClickLogout,
  photoUrl,
}: HeaderProps) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const handleClick = useCallback(() => {
    setIsShowMenu((prevIsShowMenu) => !prevIsShowMenu);
  }, []);
  const outsideClick = useCallback(() => {
    setIsShowMenu(false);
  }, []);
  const [ref] = useOutsideClickRef(outsideClick);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Twiv</div>
      <div className={styles.menuTarget}>
        <button onClick={handleClick}>
          <div className={styles.userImageWrapper}>
            <img
              alt={displayName}
              className={styles.userImage}
              src={photoUrl}
            />
          </div>
        </button>
        {isShowMenu ? (
          <div className={styles.menuWrapper} ref={ref}>
            <Menu
              handleClickAddHome={handleClickAddHome}
              handleClickLogout={handleClickLogout}
            />
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
