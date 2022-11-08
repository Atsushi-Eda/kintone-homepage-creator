import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { AddTextElement } from "components/Tools/AddElement/AddTextElement";
import { AddBoxElement } from "components/Tools/AddElement/AddBoxElement";
import { AddReferenceElement } from "components/Tools/AddElement/AddReferenceElement";
import { AddFileElement } from "components/Tools/AddElement/AddFileElement";

export const AddElement: React.FC = () => {
  return (
    <div className="homepage-creator--add-element-buttons">
      <p className="homepage-creator--tool-title">要素を追加</p>
      <Grid container spacing={1}>
        <Grid xs={6}>
          <AddTextElement />
        </Grid>
        <Grid xs={6}>
          <AddBoxElement />
        </Grid>
        <Grid xs={6}>
          <AddFileElement />
        </Grid>
        <Grid xs={6}>
          <AddReferenceElement />
        </Grid>
      </Grid>
    </div>
  );
};
