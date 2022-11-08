import React from "react";
import type { FileElement } from "types/element";
import { InputLabel, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const FileElementSetting: React.FC<{
  element: FileElement;
  editElement: CallableFunction;
}> = ({ element, editElement }) => (
  <Grid container spacing={1}>
    <Grid xs={12}>
      <InputLabel>ファイルキー</InputLabel>
      <TextField value={element.fileKey} fullWidth disabled />
    </Grid>
  </Grid>
);
