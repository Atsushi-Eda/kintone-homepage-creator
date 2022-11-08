import React from "react";
import { IconButton, TextField } from "@mui/material";
import { uploadFile } from "lib/file";
import UploadIcon from "@mui/icons-material/Upload";

export const BackgroundImageSetting: React.FC<{
  fileKey: string;
  onChange: CallableFunction;
}> = ({ fileKey, onChange }) => {
  return (
    <TextField
      value={fileKey}
      InputProps={{
        endAdornment: (
          <IconButton component="label">
            <UploadIcon />
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={async (event) => {
                const [file] = event.target.files ?? [];
                if (!file) {
                  return;
                }
                const newFileKey = await uploadFile(file);
                if (!newFileKey) {
                  return;
                }
                onChange(newFileKey);
              }}
            />
          </IconButton>
        ),
      }}
      fullWidth
    />
  );
};
