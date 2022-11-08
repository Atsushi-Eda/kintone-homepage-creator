import React from "react";
import type { BoxStyle } from "types/element";
import { useFile } from "lib/query";
import { useRecoilValue } from "recoil";
import { previewWidthState } from "lib/state";

export const BaseBoxElement: React.FC<{
  style: BoxStyle;
  children: React.ReactNode;
  className: string;
}> = ({ style, children, className }) => {
  const previewWidth = useRecoilValue(previewWidthState);
  const { data: fileUrl } = useFile(style.backgroundImage);
  const convertVerticalAlign = (verticalAlign: string) => {
    switch (verticalAlign) {
      case "center":
        return "center";
      case "bottom":
        return "end";
      default:
        return "start";
    }
  };

  return (
    <div
      className={`${className} box-vertical-align-${style.verticalAlign}`}
      style={{
        ...(style.backgroundType === "color"
          ? { backgroundColor: style.backgroundColor }
          : { backgroundImage: `url(${fileUrl})` }),
        width: `${(previewWidth * style.width) / 100}px`,
        maxWidth: "100%",
        minHeight: `${(previewWidth * style.width * style.aspect) / 10000}px`,
        padding: `${style.padding}px`,
        justifyContent: convertVerticalAlign(style.verticalAlign),
        textAlign: style.horizontalAlign,
      }}
    >
      {children}
    </div>
  );
};
