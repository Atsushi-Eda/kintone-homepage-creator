import React from "react";
import type { ReferenceFieldElement as REFERENCE_FIELD_ELEMENT } from "types/element";
import { ReferenceProps } from "types/reference";
import { getPublicReferenceFieldElementComponent } from "lib/public-reference-field-type-handler";

export const ReferenceFieldElement: React.FC<{
  element: REFERENCE_FIELD_ELEMENT;
  reference: ReferenceProps;
}> = ({ element, reference }) => {
  const field = reference.record[element.fieldCode];

  if (!field) {
    return <span />;
  }

  return (
    <span className="homepage-creator--reference-field-element">
      {getPublicReferenceFieldElementComponent(
        element,
        field,
        reference.apiUrl
      )}
    </span>
  );
};
