import type { Element } from "types/element";
import type { ElementIndex } from "types/elementIndex";
import { getElementIndex, moveElement } from "lib/layout-editor";

export const dropItem = (
  layout: Element[][],
  item: { elementKey: string },
  parentElementIndex: ElementIndex | null,
  rowIndex: number,
  row: Element[]
): Element[][] => {
  const sourceIndex = getElementIndex(layout, item.elementKey);
  const destinationIndex = buildDestinationIndex(
    parentElementIndex,
    rowIndex,
    row
  );
  if (!sourceIndex) {
    return layout;
  }
  return moveElement(layout, sourceIndex, destinationIndex);
};

const buildDestinationIndex = (
  parentElementIndex: ElementIndex | null,
  rowIndex: number,
  row: Element[]
): ElementIndex => ({
  parents: parentElementIndex
    ? [
        ...parentElementIndex.parents,
        {
          rowIndex: parentElementIndex.rowIndex,
          columnIndex: parentElementIndex.columnIndex,
        },
      ]
    : [],
  rowIndex,
  columnIndex: row.length,
  isEmpty: !row.length,
});
