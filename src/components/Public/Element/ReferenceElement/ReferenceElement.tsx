import React from "react";
import type { ReferenceElement as REFERENCE_ELEMENT } from "types/element";
import { useRecords } from "lib/query";
import { ReferenceRecord } from "components/Public/Element/ReferenceElement/ReferenceRecord";

export const ReferenceElement: React.FC<{
  element: REFERENCE_ELEMENT;
}> = ({ element }) => {
  const { data: records } = useRecords(element.apiUrl);
  return (
    <div className="homepage-creator--reference-element">
      {records.map((record, index) => (
        <ReferenceRecord
          key={record.$id.value as string}
          element={element}
          order={index}
          reference={{ record, apiUrl: element.apiUrl }}
        />
      ))}
    </div>
  );
};
