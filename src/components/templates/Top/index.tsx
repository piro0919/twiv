import useOutsideClickRef from "@rooks/use-outside-click-ref";
import useWindowSize from "@rooks/use-window-size";
import React, {
  CSSProperties,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import styles from "./style.module.scss";
import ComicList from "components/organisms/ComicList";
import Menu, { MenuProps } from "components/organisms/Menu";

export type TopProps = Pick<
  MenuProps,
  "disabledPwa" | "handleClickAddHome" | "handleClickLogout"
> & {
  displayName: string;
  photoUrl: string;
};

const Top: FC<TopProps> = ({
  disabledPwa,
  displayName,
  handleClickAddHome,
  handleClickLogout,
  photoUrl,
}: TopProps) => {
  const { innerHeight } = useWindowSize();
  const wrapperStyle = useMemo<CSSProperties>(
    () => ({ minHeight: innerHeight }),
    [innerHeight]
  );
  const [isShowMenu, setIsShowMenu] = useState(false);
  const handleClick = useCallback(() => {
    setIsShowMenu((prevIsShowMenu) => !prevIsShowMenu);
  }, []);
  const outsideClick = useCallback(() => {
    setIsShowMenu(false);
  }, []);
  const [ref] = useOutsideClickRef(outsideClick);

  return (
    <div className={styles.wrapper} style={wrapperStyle}>
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
                disabledPwa={disabledPwa}
                handleClickAddHome={handleClickAddHome}
                handleClickLogout={handleClickLogout}
              />
            </div>
          ) : null}
        </div>
      </header>
      <div className={styles.comicListWrapper}>
        <ComicList />
      </div>
    </div>
  );
};

export default Top;
