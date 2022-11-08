import React from "react";
import type { ReferenceFieldElement as REFERENCE_FIELD_ELEMENT } from "types/element";
import {
  SingleLineText,
  MultiLineText,
} from "@kintone/rest-api-client/lib/KintoneFields/types/field";

export const ReferenceTextFieldElement: React.FC<{
  element: REFERENCE_FIELD_ELEMENT;
  field: SingleLineText | MultiLineText;
}> = ({ element, field }) => {
  return (
    <span className="homepage-creator--reference--text-field-element">
      {field.value}
    </span>
  );
};
