import React from "react";
import { BoxStyle } from "types/element";
import {
  FormControlLabel,
  InputAdornment,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { BackgroundImageSetting } from "components/Tools/ElementSetting/BackgroundImageSetting";
import {
  AlignHorizontalCenter,
  AlignHorizontalLeft,
  AlignHorizontalRight,
  AlignVerticalBottom,
  AlignVerticalCenter,
  AlignVerticalTop,
} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";

export const BoxStyleSetting: React.FC<{
  style: BoxStyle;
  editStyle: CallableFunction;
}> = ({ style, editStyle }) => (
  <Grid container spacing={1}>
    <Grid xs={6}>
      <InputLabel>背景タイプ</InputLabel>
      <RadioGroup
        row
        value={style.backgroundType}
        onChange={(_, backgroundType) =>
          editStyle({
            ...style,
            backgroundType,
          })
        }
      >
        <FormControlLabel control={<Radio />} label="色" value="color" />
        <FormControlLabel control={<Radio />} label="画像" value="image" />
      </RadioGroup>
    </Grid>
    <Grid xs={6}>
      {style.backgroundType === "color" ? (
        <>
          <InputLabel>背景色</InputLabel>
          <TextField
            value={style.backgroundColor}
            onChange={({ target: { value: backgroundColor } }) =>
              editStyle({
                ...style,
                backgroundColor,
              })
            }
            fullWidth
          />
        </>
      ) : (
        <>
          <InputLabel>背景画像</InputLabel>
          <BackgroundImageSetting
            fileKey={style.backgroundImage}
            onChange={(backgroundImage: string) =>
              editStyle({
                ...style,
                backgroundImage,
              })
            }
          />
        </>
      )}
    </Grid>
    <Grid xs={6}>
      <InputLabel>幅</InputLabel>
      <TextField
        type="number"
        value={style.width}
        onChange={({ target: { value: width } }) =>
          editStyle({
            ...style,
            width,
          })
        }
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
      />
    </Grid>
    <Grid xs={6}>
      <InputLabel>縦横比</InputLabel>
      <TextField
        type="number"
        value={style.aspect}
        onChange={({ target: { value: aspect } }) =>
          editStyle({
            ...style,
            aspect,
          })
        }
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
      />
    </Grid>
    <Grid xs={6}>
      <InputLabel>余白</InputLabel>
      <TextField
        type="number"
        value={style.padding}
        onChange={({ target: { value: padding } }) =>
          editStyle({
            ...style,
            padding,
          })
        }
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position="end">px</InputAdornment>,
        }}
      />
    </Grid>
    <Grid xs={6} />
    <Grid xs={6}>
      <InputLabel>横揃え</InputLabel>
      <ToggleButtonGroup
        value={style.horizontalAlign}
        exclusive
        onChange={(_, horizontalAlign) =>
          editStyle({
            ...style,
            horizontalAlign,
          })
        }
      >
        <ToggleButton value="left">
          <AlignHorizontalLeft />
        </ToggleButton>
        <ToggleButton value="center">
          <AlignHorizontalCenter />
        </ToggleButton>
        <ToggleButton value="right">
          <AlignHorizontalRight />
        </ToggleButton>
      </ToggleButtonGroup>
    </Grid>
    <Grid xs={6}>
      <InputLabel>縦揃え</InputLabel>
      <ToggleButtonGroup
        value={style.verticalAlign}
        exclusive
        onChange={(_, verticalAlign) =>
          editStyle({
            ...style,
            verticalAlign,
          })
        }
      >
        <ToggleButton value="top">
          <AlignVerticalTop />
        </ToggleButton>
        <ToggleButton value="center">
          <AlignVerticalCenter />
        </ToggleButton>
        <ToggleButton value="bottom">
          <AlignVerticalBottom />
        </ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  </Grid>
);
