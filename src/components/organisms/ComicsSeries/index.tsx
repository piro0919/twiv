import useWindowSize from "@rooks/use-window-size";
import React, { FC, useMemo } from "react";
import { ImBooks } from "react-icons/im";
import ComitList, { ComicsListProps } from "../ComicsList";
import styles from "./style.module.scss";

const ComicsSeries: FC = () => {
  const { innerWidth } = useWindowSize();
  const isNarrow = useMemo<ComicsListProps["isNarrow"]>(
    () => innerWidth >= 740,
    [innerWidth]
  );

  return (
    <div>
      <div className={styles.topWrapper2}>
        <ImBooks color="#97bf64" size={20} />
        <h3>シリーズ</h3>
      </div>
      <hr className={styles.hr} />
      <ComitList isNarrow={isNarrow} />
    </div>
  );
};

export default ComicsSeries;
