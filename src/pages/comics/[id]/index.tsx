import useLocalstorage from "@rooks/use-localstorage";
import useWindowSize from "@rooks/use-window-size";
import { NextSeo } from "next-seo";
import React, { FC, useCallback, useMemo } from "react";
import Comics, { ComicsProps } from "components/templates/Comics";

const Id: FC = () => {
  const { innerHeight, innerWidth } = useWindowSize();
  const enabledBlank = useMemo(() => innerHeight < innerWidth, [
    innerHeight,
    innerWidth,
  ]);
  const [isExpansionValue, setIsExpansion] = useLocalstorage(
    "isExpansion",
    false
  );
  const handleChangeExpansion = useCallback<
    ComicsProps["handleChangeExpansion"]
  >(
    (isExpansion) => {
      setIsExpansion(isExpansion);
    },
    [setIsExpansion]
  );

  return (
    <>
      <NextSeo
        noindex={true}
        title="【創作】合コンに行ったら女がいなかった話 | Twiv"
      />
      <Comics
        handleChangeExpansion={handleChangeExpansion}
        initialIsExpansion={!!isExpansionValue}
        pages={[
          null,
          "/hoge/01.png",
          "/hoge/02.png",
          "/hoge/03.png",
          "/hoge/04.png",
          "/hoge/05.png",
          "/hoge/06.png",
          "/hoge/07.png",
          "/hoge/08.png",
          "/hoge/09.png",
          "/hoge/10.png",
          "/hoge/11.png",
          "/hoge/12.png",
        ].filter((page) => enabledBlank || page)}
      />
    </>
  );
};

export default Id;
