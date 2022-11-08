import React from "react";
import type { BoxElement as BOX_ELEMENT } from "types/element";
import type { ElementIndex } from "types/elementIndex";
import { NonEditableRow } from "components/Preview/NonEditable/NonEditableRow";
import { BaseBoxElement } from "components/Preview/Element/BaseBoxElement";
import { ReferenceProps } from "types/reference";

export const NonEditableBoxElement: React.FC<{
  element: BOX_ELEMENT;
  elementIndex: ElementIndex;
  reference?: ReferenceProps | null;
}> = ({ element, elementIndex, reference }) => {
  return (
    <BaseBoxElement
      className="homepage-creator--box-element"
      style={element.style}
    >
      {element.layout.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          <NonEditableRow
            key={`${rowIndex}-empty`}
            row={[]}
            rowIndex={rowIndex}
            parentElementIndex={elementIndex}
          />
          <NonEditableRow
            key={rowIndex}
            row={row}
            rowIndex={rowIndex}
            parentElementIndex={elementIndex}
            reference={reference}
          />
        </React.Fragment>
      ))}
      <NonEditableRow
        key={`${element.layout.length}-empty`}
        row={[]}
        rowIndex={element.layout.length}
        parentElementIndex={elementIndex}
      />
    </BaseBoxElement>
  );
};
