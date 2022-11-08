import React from "react";
import { TextElement } from "types/element";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InputLabel } from "@mui/material";

export const TextElementSetting: React.FC<{
  element: TextElement;
  editElement: CallableFunction;
}> = ({ element, editElement }) => (
  <>
    <InputLabel>テキスト</InputLabel>
    <ReactQuill
      theme="snow"
      modules={{
        toolbar: [
          [{ color: [] }],
          [{ size: ["small", false, "large", "huge"] }],
          ["link"],
        ],
      }}
      value={element.value}
      onChange={(value) => editElement({ ...element, value })}
    />
  </>
);
