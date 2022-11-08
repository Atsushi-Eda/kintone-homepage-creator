import React, { useState } from "react";
import { getElementName } from "lib/element-type-handler";
import { Button } from "@mui/material";
import { AddReferenceElementDialog } from "components/Tools/AddElement/AddReferenceElementDialog";

export const AddReferenceElement: React.FC = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => {
          setOpenDialog(true);
        }}
        variant="outlined"
        fullWidth
        style={{
          textTransform: "none",
        }}
      >
        {getElementName("reference")}
      </Button>
      <AddReferenceElementDialog
        isOpen={openDialog}
        close={() => setOpenDialog(false)}
      />
    </>
  );
};
