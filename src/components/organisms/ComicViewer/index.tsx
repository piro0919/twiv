import React, { FC, useMemo } from "react";
import ReactComicViewer, {
  ComicViewerProps as ReactComicViewerProps,
} from "react-comic-viewer";

export type ComicViewerProps = Pick<ReactComicViewerProps, "pages">;

const ComicViewer: FC<ComicViewerProps> = ({ pages }: ComicViewerProps) => {
  const text = useMemo(
    () => ({
      expansion: "拡大",
      fullScreen: "全画面",
      move: "移動",
      normal: "通常",
    }),
    []
  );

  return <ReactComicViewer pages={pages} text={text} />;
};

export default ComicViewer;
