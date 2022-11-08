import { OneOf } from "@kintone/rest-api-client/lib/KintoneFields/types/field";
import { createElement, Fragment } from "react";
import { ReferenceFieldElement } from "types/element";
import { ReferenceTextFieldElement } from "components/Public/Element/ReferenceElement/ReferenceTextFieldElement";
import { ReferenceFileFieldElement } from "components/Public/Element/ReferenceElement/ReferenceFileFieldElement";

export const getPublicReferenceFieldElementComponent = (
  element: ReferenceFieldElement,
  field: OneOf,
  apiUrl: string
) => {
  switch (field.type) {
    case "SINGLE_LINE_TEXT":
    case "MULTI_LINE_TEXT":
      return createElement(ReferenceTextFieldElement, {
        element,
        field,
      });
    case "FILE":
      return createElement(ReferenceFileFieldElement, {
        element,
        field,
        apiUrl,
      });
    default:
      return createElement(Fragment);
  }
};
