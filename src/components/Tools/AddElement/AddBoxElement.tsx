import React from "react";
import { getDefaultElement, getElementName } from "lib/element-type-handler";
import { useSetRecoilState } from "recoil";
import { layoutState, selectedElementKeyState } from "lib/state";
import { Button } from "@mui/material";

export const AddBoxElement: React.FC = () => {
  const setLayout = useSetRecoilState(layoutState);
  const setSelectedElementKey = useSetRecoilState(selectedElementKeyState);

  return (
    <Button
      onClick={() => {
        const element = getDefaultElement("box");
        setLayout((oldLayout) => [...oldLayout, [element]]);
        setTimeout(() => setSelectedElementKey(element.key), 0);
      }}
      variant="outlined"
      fullWidth
      style={{
        textTransform: "none",
      }}
    >
      {getElementName("box")}
    </Button>
  );
};
