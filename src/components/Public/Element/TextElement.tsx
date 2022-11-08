import React from "react";
import type { TextElement as TEXT_ELEMENT } from "types/element";

export const TextElement: React.FC<{
  element: TEXT_ELEMENT;
}> = ({ element }) => {
  return (
    <div
      className="homepage-creator--text-element"
      dangerouslySetInnerHTML={{ __html: element.value }}
    />
  );
};
