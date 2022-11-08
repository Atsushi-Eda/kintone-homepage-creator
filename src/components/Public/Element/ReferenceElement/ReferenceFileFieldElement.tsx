import React from "react";
import type { ReferenceFieldElement as REFERENCE_FIELD_ELEMENT } from "types/element";
import { File } from "@kintone/rest-api-client/lib/KintoneFields/types/field";
import { getFileUrl } from "lib/kviewer";

export const ReferenceFileFieldElement: React.FC<{
  element: REFERENCE_FIELD_ELEMENT;
  field: File;
  apiUrl: string;
}> = ({ element, field, apiUrl }) => {
  return (
    <span className="homepage-creator--reference-file-field-element">
      {field.value
        .filter(
          (file) =>
            file.contentType.startsWith("image") ||
            file.contentType.startsWith("video")
        )
        .map((file) =>
          file.contentType.startsWith("image") ? (
            <img
              alt={file.fileKey}
              key={file.fileKey}
              src={getFileUrl(apiUrl, file.fileKey)}
            />
          ) : (
            <video key={file.fileKey} src={getFileUrl(apiUrl, file.fileKey)} />
          )
        )}
    </span>
  );
};
