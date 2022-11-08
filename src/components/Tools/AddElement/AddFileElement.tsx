import React from "react";
import { getDefaultElement, getElementName } from "lib/element-type-handler";
import { useSetRecoilState } from "recoil";
import { layoutState, selectedElementKeyState } from "lib/state";
import { Button } from "@mui/material";
import { uploadFile } from "lib/file";

export const AddFileElement: React.FC = () => {
  const setLayout = useSetRecoilState(layoutState);
  const setSelectedElementKey = useSetRecoilState(selectedElementKeyState);

  return (
    <Button
      variant="outlined"
      fullWidth
      style={{
        textTransform: "none",
      }}
      component="label"
    >
      {getElementName("file")}
      <input
        type="file"
        hidden
        accept="image/*,video/*"
        onChange={async (event) => {
          const [file] = event.target.files ?? [];
          if (!file) {
            return;
          }
          console.log(file);
          const fileKey = await uploadFile(file);
          if (!fileKey) {
            return;
          }
          const fileType = file.type.startsWith("image") ? "image" : "video";
          console.log(fileType);
          const element = getDefaultElement("file");
          setLayout((oldLayout) => [
            ...oldLayout,
            [{ ...element, fileKey, fileType }],
          ]);
          setTimeout(() => setSelectedElementKey(element.key), 0);
        }}
      />
    </Button>
  );
};
