import React from "react";
import { ElementSetting } from "components/Tools/ElementSetting/ElementSetting";
import { AddElement } from "components/Tools/AddElement/AddElement";
import { FinishEditing } from "components/Tools/FinishEditing/FinishEditing";

export const Tools: React.FC = () => {
  return (
    <div className="homepage-creator--tools">
      <ElementSetting />
      <AddElement />
      <FinishEditing />
    </div>
  );
};
