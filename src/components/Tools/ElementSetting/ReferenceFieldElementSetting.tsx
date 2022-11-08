import React from "react";
import { ReferenceFieldElement } from "types/element";
import { InputLabel, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const ReferenceFieldElementSetting: React.FC<{
  element: ReferenceFieldElement;
  editElement: CallableFunction;
}> = ({ element, editElement }) => (
  <Grid container spacing={1}>
    <Grid xs={12}>
      <InputLabel>フィールドコード</InputLabel>
      <TextField value={element.fieldCode} fullWidth disabled />
    </Grid>
  </Grid>
);
