import React from "react";
import type { TextElement as TEXT_ELEMENT } from "types/element";
import type { ElementIndex } from "types/elementIndex";

export const TextElement: React.FC<{
  element: TEXT_ELEMENT;
  elementIndex: ElementIndex;
}> = ({ element, elementIndex }) => {
  return (
    <div
      className="homepage-creator--text-element"
      dangerouslySetInnerHTML={{ __html: element.value }}
    />
  );
};
