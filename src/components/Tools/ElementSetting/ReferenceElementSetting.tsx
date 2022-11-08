import React, { useState } from "react";
import { BoxStyle, ReferenceElement } from "types/element";
import { InputLabel, Tab, Tabs, TextField } from "@mui/material";
import { BoxStyleSetting } from "components/Tools/ElementSetting/BoxStyleSetting";
import Grid from "@mui/material/Unstable_Grid2";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

export const ReferenceElementSetting: React.FC<{
  element: ReferenceElement;
  editElement: CallableFunction;
}> = ({ element, editElement }) => {
  const [styleIndex, setStyleIndex] = useState<number>(0);
  const getStyleDescription = (length: number, index: number) => {
    if (length <= 1) {
      return "全て";
    }
    if (length === index + 1) {
      return `${length}n番目`;
    }
    return `${length}n${index + 1 - length}番目`;
  };

  return (
    <Grid container spacing={1}>
      <Grid xs={12}>
        <InputLabel>APIビューのURL</InputLabel>
        <TextField value={element.apiUrl} fullWidth disabled />
      </Grid>
      <Grid xs={12}>
        <Tabs
          value={styleIndex}
          onChange={(_, index) => {
            if (index < element.styles.length) {
              setStyleIndex(index);
              return;
            }
            editElement({
              ...element,
              styles: [...element.styles, element.styles[0]],
            });
            setStyleIndex(element.styles.length);
          }}
          variant="scrollable"
          scrollButtons={false}
          style={{
            height: "48px",
          }}
        >
          {[...Array(element.styles.length)].map((_, index) => (
            <Tab
              key={index}
              label={getStyleDescription(element.styles.length, index)}
              icon={
                element.styles.length > 1 ? (
                  <CloseIcon
                    fontSize="small"
                    onClick={(e) => {
                      editElement({
                        ...element,
                        styles: [
                          ...element.styles.slice(0, styleIndex),
                          ...element.styles.slice(styleIndex + 1),
                        ],
                      });
                      setStyleIndex(0);
                      e.stopPropagation();
                    }}
                  />
                ) : (
                  ""
                )
              }
              iconPosition="end"
              style={{
                textTransform: "none",
                padding: 0,
              }}
            />
          ))}
          <Tab
            icon={<AddIcon fontSize="small" />}
            style={{
              textTransform: "none",
              padding: 0,
            }}
          />
        </Tabs>
      </Grid>
      <Grid xs={12}>
        <BoxStyleSetting
          style={element.styles[styleIndex]}
          editStyle={(style: BoxStyle) =>
            editElement({
              ...element,
              styles: [
                ...element.styles.slice(0, styleIndex),
                style,
                ...element.styles.slice(styleIndex + 1),
              ],
            })
          }
        />
      </Grid>
    </Grid>
  );
};
