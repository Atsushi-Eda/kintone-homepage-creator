import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { layoutState } from "lib/state";
import Button from "@mui/material/Button";
import { updateLayout } from "lib/record";
import { Snackbar } from "@mui/material";

export const SaveLayoutButton: React.FC = () => {
  const layout = useRecoilValue(layoutState);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  return (
    <>
      <Button
        onClick={async () => {
          await updateLayout(layout);
          setOpenSnackbar(true);
        }}
        fullWidth
        variant="contained"
      >
        保存
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        message="保存しました"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </>
  );
};
