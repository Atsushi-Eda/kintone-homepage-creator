import React from "react";
import type { FileElement as FILE_ELEMENT } from "types/element";
import type { ElementIndex } from "types/elementIndex";
import { useFile } from "lib/query";

export const FileElement: React.FC<{
  element: FILE_ELEMENT;
  elementIndex: ElementIndex;
}> = ({ element, elementIndex }) => {
  const { data: fileUrl } = useFile(element.fileKey);

  return (
    <div className="homepage-creator--file-element">
      {element.fileType === "image" ? (
        <img src={fileUrl} alt={element.key} />
      ) : (
        <video src={fileUrl} controls />
      )}
    </div>
  );
};
