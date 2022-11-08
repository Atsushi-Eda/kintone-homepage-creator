import { BoxStyle } from "types/element";
import { Record } from "@kintone/rest-api-client/lib/client/types";

export const getRecordStyle = (styles: BoxStyle[], order: number) =>
  styles[order % styles.length];

export const getFieldCodes = (records: Record[] | null) => {
  if (!records || !records.length) {
    return [];
  }
  return Object.entries(records[0])
    .filter(([_, { type }]) =>
      ["SINGLE_LINE_TEXT", "MultiLineText", "FILE"].includes(type)
    )
    .map(([code]) => code);
};
