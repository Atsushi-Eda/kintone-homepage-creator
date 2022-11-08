import type {
  Number as KintoneNumber,
  MultiLineText,
  File,
} from "@kintone/rest-api-client/lib/KintoneFields/types/field";

export declare type HomepageCreatorAppRecord = {
  homepage_creator_identifier: KintoneNumber;
  homepage_creator_layout: MultiLineText;
  homepage_creator_file: File;
};
