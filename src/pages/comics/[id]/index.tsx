import useWindowSize from "@rooks/use-window-size";
import Comics from "components/templates/Comics";
import { NextSeo } from "next-seo";
import React, { FC, useMemo } from "react";

const Id: FC = () => {
  const { innerHeight, innerWidth } = useWindowSize();
  const enabledBlank = useMemo(() => innerHeight < innerWidth, [
    innerHeight,
    innerWidth,
  ]);

  return (
    <>
      <NextSeo
        noindex={true}
        title="【創作】合コンに行ったら女がいなかった話 | Twiv"
      />
      <Comics
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
