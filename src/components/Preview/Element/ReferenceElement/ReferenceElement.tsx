import React from "react";
import type { ReferenceElement as REFERENCE_ELEMENT } from "types/element";
import type { ElementIndex } from "types/elementIndex";
import { useRecords } from "lib/query";
import { ReferenceRecord } from "components/Preview/Element/ReferenceElement/ReferenceRecord";
import { NonEditableReferenceRecord } from "components/Preview/NonEditable/NonEditableReferenceRecord";

export const ReferenceElement: React.FC<{
  element: REFERENCE_ELEMENT;
  elementIndex: ElementIndex;
}> = ({ element, elementIndex }) => {
  const { data: records } = useRecords(element.apiUrl);
  return (
    <div className="homepage-creator--reference-element">
      {records.slice(0, 1).map((record) => (
        <ReferenceRecord
          key={record.$id.value as string}
          element={element}
          elementIndex={elementIndex}
          order={0}
          reference={{ record, apiUrl: element.apiUrl }}
        />
      ))}
      {records.slice(1).map((record, index) => (
        <NonEditableReferenceRecord
          key={record.$id.value as string}
          element={element}
          elementIndex={elementIndex}
          order={index + 1}
          reference={{ record, apiUrl: element.apiUrl }}
        />
      ))}
    </div>
  );
};
