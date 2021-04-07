import useOutsideClickRef from "@rooks/use-outside-click-ref";
import React, { FC, useCallback, useState } from "react";
import Menu, { MenuProps } from "../Menu";
import styles from "./style.module.scss";

export type HeaderProps = Pick<
  MenuProps,
  | "canAddHome"
  | "canUpdate"
  | "enabledAddHome"
  | "enabledUpdate"
  | "handleClickAddHome"
  | "handleClickLogout"
  | "handleClickUpdate"
> & {
  displayName: string;
  photoUrl: string;
};

const Header: FC<HeaderProps> = ({
  canAddHome,
  canUpdate,
  displayName,
  enabledAddHome,
  enabledUpdate,
  handleClickAddHome,
  handleClickLogout,
  handleClickUpdate,
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
              canAddHome={canAddHome}
              canUpdate={canUpdate}
              enabledAddHome={enabledAddHome}
              enabledUpdate={enabledUpdate}
              handleClickAddHome={handleClickAddHome}
              handleClickLogout={handleClickLogout}
              handleClickUpdate={handleClickUpdate}
            />
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
