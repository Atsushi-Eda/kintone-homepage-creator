import React from "react";
import { BoxElement, BoxStyle } from "types/element";
import { BoxStyleSetting } from "components/Tools/ElementSetting/BoxStyleSetting";

export const BoxElementSetting: React.FC<{
  element: BoxElement;
  editElement: CallableFunction;
}> = ({ element, editElement }) => (
  <BoxStyleSetting
    style={element.style}
    editStyle={(style: BoxStyle) => editElement({ ...element, style })}
  />
);
