import { atom } from "recoil";
import type { Element } from "types/element";
import { getInitialLayout } from "lib/setup";

export const layoutState = atom<Element[][]>({
  key: "layoutState",
  default: getInitialLayout(),
});

export const selectedElementKeyState = atom<string | null>({
  key: "selectedElementKeyState",
  default: null,
});

export const previewWidthState = atom<number>({
  key: "previewWidthState",
  default: 0,
});
