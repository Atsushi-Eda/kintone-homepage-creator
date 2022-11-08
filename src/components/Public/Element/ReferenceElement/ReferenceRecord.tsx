import React from "react";
import type { ReferenceElement } from "types/element";
import { Row } from "components/Public/Row";
import { BaseBoxElement } from "components/Public/Element/BaseBoxElement";
import { getRecordStyle } from "lib/reference-element";
import { ReferenceProps } from "types/reference";

export const ReferenceRecord: React.FC<{
  element: ReferenceElement;
  order: number;
  reference: ReferenceProps;
}> = ({ element, order, reference }) => {
  return (
    <BaseBoxElement
      style={getRecordStyle(element.styles, order)}
      className="homepage-creator--reference-record"
    >
      {element.layout.map((row, rowIndex) => (
        <Row key={rowIndex} row={row} reference={reference} />
      ))}
    </BaseBoxElement>
  );
};
