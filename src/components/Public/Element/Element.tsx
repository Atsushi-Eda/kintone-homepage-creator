import React from "react";
import { getPublicElementComponent } from "lib/public-element-type-handler";
import type { Element as ELEMENT } from "types/element";
import { ReferenceProps } from "types/reference";

export const Element: React.FC<{
  element: ELEMENT;
  reference?: ReferenceProps | null;
}> = ({ element, reference = null }) => {
  return (
    <div className="homepage-creator--element">
      {getPublicElementComponent(element, reference)}
    </div>
  );
};
