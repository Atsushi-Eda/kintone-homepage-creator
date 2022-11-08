import React from "react";
import type { BoxElement as BOX_ELEMENT } from "types/element";
import type { ElementIndex } from "types/elementIndex";
import { Row } from "components/Preview/Row";
import { BaseBoxElement } from "components/Preview/Element/BaseBoxElement";
import { ReferenceProps } from "types/reference";

export const BoxElement: React.FC<{
  element: BOX_ELEMENT;
  elementIndex: ElementIndex;
  reference?: ReferenceProps | null;
}> = ({ element, elementIndex, reference }) => {
  return (
    <BaseBoxElement
      style={element.style}
      className="homepage-creator--box-element"
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
