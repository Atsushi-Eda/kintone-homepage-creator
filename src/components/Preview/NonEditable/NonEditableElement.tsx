import React from "react";
import { getNonEditableElementComponent } from "lib/element-type-handler";
import type { Element as ELEMENT } from "types/element";
import type { ElementIndex } from "types/elementIndex";
import { ReferenceProps } from "types/reference";

export const NonEditableElement: React.FC<{
  elementIndex: ElementIndex;
  element: ELEMENT;
  reference?: ReferenceProps | null;
}> = ({ elementIndex, element, reference = null }) => {
  return (
    <div className="homepage-creator--element">
      {getNonEditableElementComponent(element, elementIndex, reference)}
    </div>
  );
};
