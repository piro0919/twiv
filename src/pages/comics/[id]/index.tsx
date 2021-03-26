import useWindowSize from "@rooks/use-window-size";
import { NextSeo } from "next-seo";
import React, { FC, useEffect, useState } from "react";
import ComicViewer from "react-comic-viewer";

const Id: FC = () => {
  const [enabledBlank, setEnabledBlank] = useState(false);
  const { innerHeight, innerWidth } = useWindowSize();

  useEffect(() => {
    setEnabledBlank(innerHeight < innerWidth);
  }, [innerHeight, innerWidth]);

  return (
    <>
      <NextSeo noindex={true} />
      <div>
        <ComicViewer
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
          text={{
            expansion: "拡大",
            fullScreen: "全画面",
            move: "移動",
            normal: "通常",
          }}
        />
        <h1>【創作】合コンに行ったら女がいなかった話</h1>
      </div>
    </>
  );
};

export default Id;
