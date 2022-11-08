import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { OutputTemplateButton } from "components/Tools/FinishEditing/OutputTemplateButton";
import { SaveLayoutButton } from "components/Tools/FinishEditing/SaveLayoutButton";

export const FinishEditing: React.FC = () => {
  return (
    <div className="homepage-creator--finish-editing">
      <p className="homepage-creator--tool-title">編集完了したら...</p>
      <Grid container spacing={1}>
        <Grid xs={6}>
          <SaveLayoutButton />
        </Grid>
        <Grid xs={6}>
          <OutputTemplateButton />
        </Grid>
      </Grid>
    </div>
  );
};
