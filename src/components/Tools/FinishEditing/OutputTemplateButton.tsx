import JSZip from "jszip";
import React, { useState } from "react";
import { template } from "const/template";
import Button from "@mui/material/Button";
import { useRecoilValue } from "recoil";
import { layoutState } from "lib/state";
import { updateLayout } from "lib/record";
import { Snackbar } from "@mui/material";

const output = () => {
  const zip = new JSZip();
  zip.file("template.json", JSON.stringify(template));
  zip.generateAsync({ type: "blob" }).then((content) => {
    const url = URL.createObjectURL(content);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.download = "template.zip";
    a.href = url;
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
};

export const OutputTemplateButton: React.FC = () => {
  const layout = useRecoilValue(layoutState);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  return (
    <>
      <Button
        onClick={async () => {
          output();
          await updateLayout(layout);
          setOpenSnackbar(true);
        }}
        fullWidth
        variant="contained"
      >
        テンプレート出力
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
