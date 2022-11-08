import React from "react";
import type { Element as ELEMENT } from "types/element";
import type { ElementIndex } from "types/elementIndex";
import { NonEditableElement } from "components/Preview/NonEditable/NonEditableElement";
import { generateElementIndex } from "lib/layout-editor";
import { ReferenceProps } from "types/reference";

export const NonEditableRow: React.FC<{
  parentElementIndex: ElementIndex | null;
  rowIndex: number;
  row: ELEMENT[];
  reference?: ReferenceProps | null;
}> = ({ parentElementIndex, rowIndex, row, reference = null }) => (
  <div className="homepage-creator--row">
    {row.map((element, columnIndex) => (
      <NonEditableElement
        element={element}
        elementIndex={generateElementIndex(
          parentElementIndex,
          rowIndex,
          columnIndex
        )}
        key={element.key}
        reference={reference}
      />
    ))}
  </div>
);
