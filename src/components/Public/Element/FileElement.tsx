import React from "react";
import type { FileElement as FILE_ELEMENT } from "types/element";
import { getFileUrl } from "lib/kviewer";

export const FileElement: React.FC<{
  element: FILE_ELEMENT;
}> = ({ element }) => {
  return (
    <div className="homepage-creator--file-element">
      {element.fileType === "image" ? (
        <img
          src={getFileUrl(location.href, element.fileKey)}
          alt={element.key}
        />
      ) : (
        <video src={getFileUrl(location.href, element.fileKey)} controls />
      )}
    </div>
  );
};
