import { OneOf } from "@kintone/rest-api-client/lib/KintoneFields/types/field";
import { createElement, Fragment } from "react";
import { ReferenceFieldElement } from "types/element";
import { ElementIndex } from "types/elementIndex";
import { ReferenceTextFieldElement } from "components/Preview/Element/ReferenceElement/ReferenceTextFieldElement";
import { ReferenceFileFieldElement } from "components/Preview/Element/ReferenceElement/ReferenceFileFieldElement";

export const getReferenceFieldElementComponent = (
  element: ReferenceFieldElement,
  elementIndex: ElementIndex,
  field: OneOf,
  apiUrl: string
) => {
  switch (field.type) {
    case "SINGLE_LINE_TEXT":
    case "MULTI_LINE_TEXT":
      return createElement(ReferenceTextFieldElement, {
        element,
        elementIndex,
        field,
      });
    case "FILE":
      return createElement(ReferenceFileFieldElement, {
        element,
        elementIndex,
        field,
        apiUrl,
      });
    default:
      return createElement(Fragment);
  }
};
