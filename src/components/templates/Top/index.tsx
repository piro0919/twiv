import useOutsideClickRef from "@rooks/use-outside-click-ref";
import useWindowSize from "@rooks/use-window-size";
import React, {
  CSSProperties,
  FC,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { GoSignOut } from "react-icons/go";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { SiMinutemailer } from "react-icons/si";
import NoSSR from "react-no-ssr";
import styles from "./style.module.scss";
import ComicList from "components/organisms/ComicList";

export type TopProps = {
  disabledPwa: boolean;
  displayName: string;
  handleClickAddHome: MouseEventHandler<HTMLButtonElement>;
  photoUrl: string;
};

const Top: FC<TopProps> = ({
  disabledPwa,
  displayName,
  handleClickAddHome,
  photoUrl,
}: TopProps) => {
  const [wrapperStyle, setWrapperStyle] = useState<CSSProperties>();
  const { innerHeight } = useWindowSize();
  const [isShowMenu, setIsShowMenu] = useState(false);
  const handleClick = useCallback(() => {
    setIsShowMenu((prevIsShowMenu) => !prevIsShowMenu);
  }, []);
  const outsideClick = useCallback(() => {
    setIsShowMenu(false);
  }, []);
  const [ref] = useOutsideClickRef(outsideClick);

  useEffect(() => {
    setWrapperStyle({ minHeight: innerHeight });
  }, [innerHeight]);

  return (
    <NoSSR>
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
              <aside className={styles.menu} ref={ref}>
                <div>
                  <SiMinutemailer size={36} />
                  <div>コンタクト</div>
                </div>
                <button disabled={disabledPwa} onClick={handleClickAddHome}>
                  <div>
                    <HiOutlineViewGridAdd size={36} />
                    <div>{`ホームに追加 ${disabledPwa}`}</div>
                  </div>
                </button>
                <div>
                  <GoSignOut size={36} />
                  <div>サインアウト</div>
                </div>
              </aside>
            ) : null}
          </div>
        </header>
        <div className={styles.comicListWrapper}>
          <ComicList />
        </div>
      </div>
    </NoSSR>
  );
};

export default Top;
