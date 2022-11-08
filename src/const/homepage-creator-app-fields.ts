import type { Properties } from "@kintone/rest-api-client/lib/client/types";

export const homepageCreatorAppFields: Properties = {
  homepage_creator_identifier: {
    type: "NUMBER",
    code: "homepage_creator_identifier",
    label: "homepage_creator_identifier",
    noLabel: false,
    required: false,
    minValue: "",
    maxValue: "",
    digit: false,
    unique: true,
    defaultValue: "",
    displayScale: "",
    unit: "",
    unitPosition: "BEFORE",
  },
  homepage_creator_layout: {
    type: "MULTI_LINE_TEXT",
    code: "homepage_creator_layout",
    label: "homepage_creator_layout",
    noLabel: false,
    required: false,
    defaultValue: "",
  },
  homepage_creator_file: {
    type: "FILE",
    code: "homepage_creator_file",
    label: "homepage_creator_file",
    noLabel: false,
    required: false,
    thumbnailSize: "150",
  },
};
