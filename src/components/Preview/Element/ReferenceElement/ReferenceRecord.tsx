import React from "react";
import type { ReferenceElement } from "types/element";
import type { ElementIndex } from "types/elementIndex";
import { Row } from "components/Preview/Row";
import { BaseBoxElement } from "components/Preview/Element/BaseBoxElement";
import { getRecordStyle } from "lib/reference-element";
import { ReferenceProps } from "types/reference";

export const ReferenceRecord: React.FC<{
  element: ReferenceElement;
  elementIndex: ElementIndex;
  order: number;
  reference: ReferenceProps;
}> = ({ element, elementIndex, order, reference }) => {
  return (
    <BaseBoxElement
      style={getRecordStyle(element.styles, order)}
      className="homepage-creator--reference-record"
    >
      {element.layout.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          <Row
            key={`${rowIndex}-empty`}
            row={[]}
            rowIndex={rowIndex}
            parentElementIndex={elementIndex}
          />
          <Row
            key={rowIndex}
            row={row}
            rowIndex={rowIndex}
            parentElementIndex={elementIndex}
            reference={reference}
          />
        </React.Fragment>
      ))}
      <Row
        key={`${element.layout.length}-empty`}
        row={[]}
        rowIndex={element.layout.length}
        parentElementIndex={elementIndex}
      />
    </BaseBoxElement>
  );
};
