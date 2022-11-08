import React from "react";
import type { Element as ELEMENT } from "types/element";
import { Element } from "components/Public/Element/Element";
import { ReferenceProps } from "types/reference";

export const Row: React.FC<{
  row: ELEMENT[];
  reference?: ReferenceProps | null;
}> = ({ row, reference = null }) => {
  return (
    <div className="homepage-creator--row">
      {row.map((element) => (
        <Element element={element} key={element.key} reference={reference} />
      ))}
    </div>
  );
};
