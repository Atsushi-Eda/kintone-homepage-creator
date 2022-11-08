import { Element, ElementType } from "types/element";
import { ElementIndex } from "types/elementIndex";
import { TextElementSetting } from "components/Tools/ElementSetting/TextElementSetting";
import { createElement, Fragment } from "react";
import { getUniqueString } from "lib/util";
import { TextElement } from "components/Preview/Element/TextElement";
import { BoxElement } from "components/Preview/Element/BoxElement";
import { BoxElementSetting } from "components/Tools/ElementSetting/BoxElementSetting";
import { ReferenceElementSetting } from "components/Tools/ElementSetting/ReferenceElementSetting";
import { ReferenceElement } from "components/Preview/Element/ReferenceElement/ReferenceElement";
import { ReferenceFieldElement } from "components/Preview/Element/ReferenceElement/ReferenceFieldElement";
import { NonEditableBoxElement } from "components/Preview/NonEditable/NonEditableBoxElement";
import { ReferenceProps } from "types/reference";
import { ReferenceFieldElementSetting } from "components/Tools/ElementSetting/ReferenceFieldElementSetting";
import { FileElement } from "components/Preview/Element/FileElement";
import { FileElementSetting } from "components/Tools/ElementSetting/FileElementSetting";

export const getElementName = (elementType: ElementType) => {
  switch (elementType) {
    case "text":
      return "テキスト";
    case "box":
      return "ボックス";
    case "file":
      return "画像・動画";
    case "reference":
      return "kintoneレコード";
    case "reference-field":
      return "kintoneフィールド";
    default:
      return "";
  }
};

export const getDefaultElement = (elementType: ElementType): Element => {
  switch (elementType) {
    case "box":
      return {
        key: getUniqueString(),
        type: "box" as const,
        style: {
          backgroundType: "color",
          backgroundColor: "#EEEEEE",
          backgroundImage: "",
          width: 100,
          aspect: 10,
          padding: 0,
          horizontalAlign: "left",
          verticalAlign: "top",
        },
        layout: [],
      };
    case "file":
      return {
        key: getUniqueString(),
        type: "file" as const,
        fileKey: "",
        fileType: "image" as const,
      };
    case "reference":
      return {
        key: getUniqueString(),
        type: "reference" as const,
        apiUrl: "",
        styles: [
          {
            backgroundType: "color",
            backgroundColor: "#EEEEEE",
            backgroundImage: "",
            width: 100,
            aspect: 10,
            padding: 0,
            horizontalAlign: "left",
            verticalAlign: "top",
          },
        ],
        layout: [],
      };
    case "reference-field":
      return {
        key: getUniqueString(),
        type: "reference-field" as const,
        fieldCode: "",
      };
    default:
      return {
        key: getUniqueString(),
        type: "text" as const,
        value: "sample",
      };
  }
};

export const getElementComponent = (
  element: Element,
  elementIndex: ElementIndex,
  reference: ReferenceProps | null
) => {
  switch (element.type) {
    case "text":
      return createElement(TextElement, { element, elementIndex });
    case "box":
      return createElement(BoxElement, { element, elementIndex, reference });
    case "file":
      return createElement(FileElement, { element, elementIndex });
    case "reference":
      return createElement(ReferenceElement, { element, elementIndex });
    case "reference-field":
      return createElement(ReferenceFieldElement, {
        element,
        elementIndex,
        reference: reference ?? { record: {}, apiUrl: "" },
      });
    default:
      return createElement(Fragment);
  }
};

export const getNonEditableElementComponent = (
  element: Element,
  elementIndex: ElementIndex,
  reference: ReferenceProps | null
) => {
  if (element.type === "box") {
    return createElement(NonEditableBoxElement, {
      element,
      elementIndex,
      reference,
    });
  }
  return getElementComponent(element, elementIndex, reference);
};

export const getElementSettingComponent = (
  element: Element,
  editElement: CallableFunction
) => {
  switch (element.type) {
    case "text":
      return createElement(TextElementSetting, {
        element,
        editElement: editElement,
      });
    case "box":
      return createElement(BoxElementSetting, {
        element,
        editElement: editElement,
      });
    case "file":
      return createElement(FileElementSetting, {
        element,
        editElement: editElement,
      });
    case "reference":
      return createElement(ReferenceElementSetting, {
        element,
        editElement: editElement,
      });
    case "reference-field":
      return createElement(ReferenceFieldElementSetting, {
        element,
        editElement: editElement,
      });
    default:
      return createElement(Fragment);
  }
};
