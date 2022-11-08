import React from "react";
import { getElementComponent } from "lib/element-type-handler";
import type { Element as ELEMENT } from "types/element";
import type { ElementIndex } from "types/elementIndex";
import { useRecoilState } from "recoil";
import { selectedElementKeyState } from "lib/state";
import { useDrag } from "react-dnd";
import { ReferenceProps } from "types/reference";

export const Element: React.FC<{
  elementIndex: ElementIndex;
  element: ELEMENT;
  reference?: ReferenceProps | null;
}> = ({ elementIndex, element, reference = null }) => {
  const [selectedElementKey, setSelectedElementKey] = useRecoilState(
    selectedElementKeyState
  );
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "element",
    item: { elementKey: element.key },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="homepage-creator--element"
      onClick={(e) => {
        setSelectedElementKey(element.key);
        e.stopPropagation();
      }}
      style={{
        opacity: isDragging ? 0.4 : 1,
        outlineColor:
          selectedElementKey === element.key ? "#4287f5" : "rgba(0, 0, 0, 0)",
      }}
      role="presentation"
    >
      {getElementComponent(element, elementIndex, reference)}
    </div>
  );
};
