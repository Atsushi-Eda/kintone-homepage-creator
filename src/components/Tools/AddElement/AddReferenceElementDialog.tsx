import React, { useState } from "react";
import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useRecords } from "lib/query";
import { getFieldCodes } from "lib/reference-element";
import { useSetRecoilState } from "recoil";
import { layoutState, selectedElementKeyState } from "lib/state";
import { getDefaultElement } from "lib/element-type-handler";

export const AddReferenceElementDialog: React.FC<{
  isOpen: boolean;
  close: CallableFunction;
}> = ({ isOpen, close }) => {
  const setLayout = useSetRecoilState(layoutState);
  const setSelectedElementKey = useSetRecoilState(selectedElementKeyState);
  const [apiUrl, setApiUrl] = useState<string>("");
  const { data: records } = useRecords(apiUrl);
  const fieldCodes = getFieldCodes(records);

  return (
    <Dialog open={isOpen} onClose={() => close()}>
      <DialogTitle>kintoneレコード要素を追加</DialogTitle>
      <DialogContent>
        <DialogContentText>
          kViewerでAPIビューを作成し、生成されたURLを入力してください
        </DialogContentText>
        <TextField
          value={apiUrl}
          onChange={({ target: { value } }) => setApiUrl(value)}
          autoFocus
          placeholder="https://***.viewer.kintoneapp.com/public/api/records/***/1"
          fullWidth
        />
        {Boolean(fieldCodes.length) && (
          <div>
            <span>表示するkintoneフィールド: </span>
            {fieldCodes.map((fieldCode) => (
              <Chip key={fieldCode} label={fieldCode} />
            ))}
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => close()}>キャンセル</Button>
        <Button
          onClick={() => {
            const element = {
              ...getDefaultElement("reference"),
              apiUrl,
              layout: [
                fieldCodes.map((fieldCode) => ({
                  ...getDefaultElement("reference-field"),
                  fieldCode,
                })),
              ],
            };
            setLayout((oldLayout) => [...oldLayout, [element]]);
            setTimeout(() => setSelectedElementKey(element.key), 0);
            setApiUrl("");
            close();
          }}
        >
          追加
        </Button>
      </DialogActions>
    </Dialog>
  );
};
