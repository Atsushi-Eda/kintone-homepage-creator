import React from "react";
import type { ReferenceFieldElement as REFERENCE_FIELD_ELEMENT } from "types/element";
import type { ElementIndex } from "types/elementIndex";
import { getReferenceFieldElementComponent } from "lib/reference-field-type-handler";
import { ReferenceProps } from "types/reference";

export const ReferenceFieldElement: React.FC<{
  element: REFERENCE_FIELD_ELEMENT;
  elementIndex: ElementIndex;
  reference: ReferenceProps;
}> = ({ element, elementIndex, reference }) => {
  const field = reference.record[element.fieldCode];

  if (!field) {
    return (
      <span className="homepage-creator--reference-field-element-error">
        適切なkintoneレコード要素の中に移動してください (fieldCode:{" "}
        {element.fieldCode})
      </span>
    );
  }

  return (
    <span className="homepage-creator--reference-field-element">
      {getReferenceFieldElementComponent(
        element,
        elementIndex,
        field,
        reference.apiUrl
      )}
    </span>
  );
};
