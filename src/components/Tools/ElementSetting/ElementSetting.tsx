import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { layoutState, selectedElementKeyState } from "lib/state";
import {
  editElement,
  getElement,
  getElementIndex,
  removeElement,
} from "lib/layout-editor";
import {
  getElementName,
  getElementSettingComponent,
} from "lib/element-type-handler";
import { Element } from "types/element";
import DeleteIcon from "@mui/icons-material/Delete";

export const ElementSetting: React.FC = () => {
  const [layout, setLayout] = useRecoilState(layoutState);
  const [selectedElementKey, setSelectedElementKey] = useRecoilState(
    selectedElementKeyState
  );
  const selectedElementIndex = selectedElementKey
    ? getElementIndex(layout, selectedElementKey)
    : null;
  const selectedElement = selectedElementIndex
    ? getElement(layout, selectedElementIndex)
    : null;

  return (
    <div className="homepage-creator--element-setting">
      <p className="homepage-creator--tool-title">
        選択中の要素:{" "}
        {selectedElement ? getElementName(selectedElement.type) : "なし"}
        {selectedElementIndex && (
          <DeleteIcon
            color="error"
            onClick={() => {
              setLayout(removeElement(layout, selectedElementIndex));
              setSelectedElementKey(null);
            }}
          />
        )}
      </p>
      {selectedElementIndex &&
        selectedElement &&
        getElementSettingComponent(selectedElement, (element: Element) =>
          setLayout(editElement(layout, element, selectedElementIndex))
        )}
    </div>
  );
};
