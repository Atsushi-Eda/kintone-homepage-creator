import { Element } from "types/element";
import { createElement, Fragment } from "react";
import { TextElement } from "components/Public/Element/TextElement";
import { FileElement } from "components/Public/Element/FileElement";
import { BoxElement } from "components/Public/Element/BoxElement";
import { ReferenceElement } from "components/Public/Element/ReferenceElement/ReferenceElement";
import { ReferenceFieldElement } from "components/Public/Element/ReferenceElement/ReferenceFieldElement";
import { ReferenceProps } from "types/reference";

export const getPublicElementComponent = (
  element: Element,
  reference: ReferenceProps | null
) => {
  switch (element.type) {
    case "text":
      return createElement(TextElement, { element });
    case "file":
      return createElement(FileElement, { element });
    case "box":
      return createElement(BoxElement, { element, reference });
    case "reference":
      return createElement(ReferenceElement, { element });
    case "reference-field":
      return createElement(ReferenceFieldElement, {
        element,
        reference: reference ?? { record: {}, apiUrl: "" },
      });
    default:
      return createElement(Fragment);
  }
};
