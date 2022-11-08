import React from "react";
import type { Element as ELEMENT } from "types/element";
import type { ElementIndex } from "types/elementIndex";
import { Element } from "components/Preview/Element/Element";
import { generateElementIndex } from "lib/layout-editor";
import { dropItem } from "lib/dnd";
import { useDrop } from "react-dnd";
import { useSetRecoilState } from "recoil";
import { layoutState } from "lib/state";
import { ReferenceProps } from "types/reference";

export const Row: React.FC<{
  parentElementIndex: ElementIndex | null;
  rowIndex: number;
  row: ELEMENT[];
  reference?: ReferenceProps | null;
}> = ({ parentElementIndex, rowIndex, row, reference = null }) => {
  const setLayout = useSetRecoilState(layoutState);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "element",
    drop: (item: { elementKey: string }, monitor) => {
      if (monitor.didDrop()) {
        return;
      }
      setLayout((layout) =>
        dropItem(layout, item, parentElementIndex, rowIndex, row)
      );
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
    }),
  }));
  return (
    <div
      ref={drop}
      className="homepage-creator--row"
      style={{
        outlineColor: isOver ? "#4287f5" : "rgba(0, 0, 0, 0)",
      }}
    >
      {row.map((element, columnIndex) => (
        <Element
          element={element}
          elementIndex={generateElementIndex(
            parentElementIndex,
            rowIndex,
            columnIndex
          )}
          key={element.key}
          reference={reference}
        />
      ))}
    </div>
  );
};
