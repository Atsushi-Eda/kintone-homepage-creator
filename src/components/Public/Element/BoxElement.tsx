import React from "react";
import type { BoxElement as BOX_ELEMENT } from "types/element";
import { Row } from "components/Public/Row";
import { BaseBoxElement } from "components/Public/Element/BaseBoxElement";
import { ReferenceProps } from "types/reference";

export const BoxElement: React.FC<{
  element: BOX_ELEMENT;
  reference?: ReferenceProps | null;
}> = ({ element, reference }) => {
  return (
    <BaseBoxElement
      style={element.style}
      className="homepage-creator--box-element"
    >
      {element.layout.map((row, rowIndex) => (
        <Row key={rowIndex} row={row} reference={reference} />
      ))}
    </BaseBoxElement>
  );
};
