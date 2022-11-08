import type { Element } from "types/element";
import type { ElementIndex } from "types/elementIndex";
import { deepCopy } from "lib/util";

const getRowAndColumnIndexes = (
  layout: Element[][],
  elementKey: string
): Array<{ rowIndex: number; columnIndex: number }> | null => {
  let rowIndex: number = -1,
    columnIndex: number = -1,
    rowAndColumnIndexes: Array<{
      rowIndex: number;
      columnIndex: number;
    }> | null = null;
  rowIndex = layout.findIndex((row) => {
    columnIndex = row.findIndex((element) => {
      if (element.key === elementKey) {
        return true;
      }
      if (!("layout" in element)) {
        return false;
      }
      rowAndColumnIndexes = getRowAndColumnIndexes(element.layout, elementKey);
      return Boolean(rowAndColumnIndexes);
    });
    return columnIndex >= 0;
  });
  if (rowIndex < 0 || columnIndex < 0) {
    return null;
  }
  return [{ rowIndex, columnIndex }, ...(rowAndColumnIndexes ?? [])];
};

export const getElementIndex = (
  layout: Element[][],
  elementKey: string
): ElementIndex | null => {
  const rowAndColumnIndexes = getRowAndColumnIndexes(layout, elementKey);
  if (!rowAndColumnIndexes) {
    return null;
  }
  return {
    parents: rowAndColumnIndexes.slice(0, -1),
    rowIndex: rowAndColumnIndexes.slice(-1)[0].rowIndex,
    columnIndex: rowAndColumnIndexes.slice(-1)[0].columnIndex,
    isEmpty: false,
  };
};

export const generateElementIndex = (
  parentElementIndex: ElementIndex | null,
  rowIndex: number,
  columnIndex: number
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
  columnIndex,
  isEmpty: false,
});

const isMovingDown = (
  sourceIndex: ElementIndex,
  destinationIndex: ElementIndex
): boolean => {
  const toComparableArray = (elementIndex: ElementIndex) => [
    ...elementIndex.parents,
    {
      rowIndex: elementIndex.rowIndex,
      columnIndex: elementIndex.columnIndex,
      isEmpty: elementIndex.isEmpty,
    },
  ];
  const source = toComparableArray(sourceIndex);
  const destination = toComparableArray(destinationIndex);
  let i = 0;
  while (i < source.length && i < destination.length) {
    if (source[i].rowIndex !== destination[i].rowIndex) {
      return source[i].rowIndex < destination[i].rowIndex;
    }
    // @ts-expect-error
    if ("isEmpty" in destination[i] && destination[i].isEmpty) {
      return false;
    }
    if (source[i].columnIndex !== destination[i].columnIndex) {
      return source[i].columnIndex < destination[i].columnIndex;
    }
    i++;
  }
  return false;
};

export const getElement = (
  layout: Element[][],
  elementIndex: ElementIndex
): Element | null => {
  if (elementIndex.parents.length) {
    const parentElement =
      layout[elementIndex.parents[0].rowIndex][
        elementIndex.parents[0].columnIndex
      ];
    if (!("layout" in parentElement)) {
      return null;
    }
    return getElement(parentElement.layout, {
      ...elementIndex,
      parents: elementIndex.parents.slice(1),
    });
  }
  return layout?.[elementIndex.rowIndex]?.[elementIndex.columnIndex] ?? null;
};

const removeElementDestructive = (
  layout: Element[][],
  sourceIndex: ElementIndex
): void => {
  if (sourceIndex.parents.length) {
    const parentElement =
      layout[sourceIndex.parents[0].rowIndex][
        sourceIndex.parents[0].columnIndex
      ];
    if (!("layout" in parentElement)) {
      return;
    }
    removeElementDestructive(parentElement.layout, {
      ...sourceIndex,
      parents: sourceIndex.parents.slice(1),
    });
    return;
  }
  layout[sourceIndex.rowIndex].splice(sourceIndex.columnIndex, 1);
  if (!layout[sourceIndex.rowIndex].length) {
    layout.splice(sourceIndex.rowIndex, 1);
  }
};

const addElementDestructive = (
  layout: Element[][],
  element: Element,
  destinationIndex: ElementIndex
): void => {
  if (destinationIndex.parents.length) {
    const parentElement =
      layout[destinationIndex.parents[0].rowIndex][
        destinationIndex.parents[0].columnIndex
      ];
    if (!("layout" in parentElement)) {
      return;
    }
    addElementDestructive(parentElement.layout, element, {
      ...destinationIndex,
      parents: destinationIndex.parents.slice(1),
    });
    return;
  }
  if (destinationIndex.isEmpty) {
    layout.splice(destinationIndex.rowIndex, 0, [element]);
  } else {
    layout[destinationIndex.rowIndex].splice(
      destinationIndex.columnIndex,
      0,
      element
    );
  }
};

export const moveElement = (
  layout: Element[][],
  sourceIndex: ElementIndex,
  destinationIndex: ElementIndex
): Element[][] => {
  const element = getElement(layout, sourceIndex);
  if (!element) return layout;

  const newLayout = deepCopy(layout);
  if (isMovingDown(sourceIndex, destinationIndex)) {
    addElementDestructive(newLayout, element, destinationIndex);
    removeElementDestructive(newLayout, sourceIndex);
  } else {
    removeElementDestructive(newLayout, sourceIndex);
    addElementDestructive(newLayout, element, destinationIndex);
  }
  return newLayout;
};

const editElementDestructive = (
  layout: Element[][],
  element: Element,
  elementIndex: ElementIndex
): void => {
  if (elementIndex.parents.length) {
    const parentElement =
      layout[elementIndex.parents[0].rowIndex][
        elementIndex.parents[0].columnIndex
      ];
    if (!("layout" in parentElement)) {
      return;
    }
    editElementDestructive(parentElement.layout, element, {
      ...elementIndex,
      parents: elementIndex.parents.slice(1),
    });
    return;
  }
  layout[elementIndex.rowIndex].splice(elementIndex.columnIndex, 1, element);
};

export const editElement = (
  layout: Element[][],
  element: Element,
  elementIndex: ElementIndex
): Element[][] => {
  const newLayout = deepCopy(layout);
  editElementDestructive(newLayout, element, elementIndex);
  return newLayout;
};

export const removeElement = (
  layout: Element[][],
  elementIndex: ElementIndex
): Element[][] => {
  const newLayout = deepCopy(layout);
  removeElementDestructive(newLayout, elementIndex);
  return newLayout;
};
