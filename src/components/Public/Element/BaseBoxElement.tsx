import React from "react";
import type { BoxStyle } from "types/element";
import { getFileUrl } from "lib/kviewer";

export const BaseBoxElement: React.FC<{
  style: BoxStyle;
  children: React.ReactNode;
  className: string;
}> = ({ style, children, className }) => {
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
      className={className}
      style={{
        ...(style.backgroundType === "color"
          ? { backgroundColor: style.backgroundColor }
          : {
              backgroundImage: `url(${getFileUrl(
                location.href,
                style.backgroundImage
              )})`,
            }),
        width: `${style.width}vw`,
        maxWidth: "100%",
        minHeight: `${(style.width * style.aspect) / 100}vw`,
        padding: `${style.padding}px`,
        justifyContent: convertVerticalAlign(style.verticalAlign),
        textAlign: style.horizontalAlign,
      }}
    >
      {children}
    </div>
  );
};
