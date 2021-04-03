import React, { FC, useMemo } from "react";
import ReactComicsViewer, {
  ComicViewerProps as ReactComicViewerProps,
} from "react-comic-viewer";

export type ComicsViewerProps = Pick<ReactComicViewerProps, "pages">;

const ComicsViewer: FC<ComicsViewerProps> = ({ pages }: ComicsViewerProps) => {
  const text = useMemo(
    () => ({
      expansion: "拡大",
      fullScreen: "全画面",
      move: "移動",
      normal: "通常",
    }),
    []
  );

  return <ReactComicsViewer pages={pages} text={text} />;
};

export default ComicsViewer;
