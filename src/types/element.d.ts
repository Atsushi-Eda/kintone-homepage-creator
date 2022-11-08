export declare type TextElement = {
  key: string;
  type: "text";
  value: string;
};

export declare type FileElement = {
  key: string;
  type: "file";
  fileKey: string;
  fileType: "image" | "video";
};

export declare type BoxStyle = {
  backgroundType: "color" | "image";
  backgroundColor: string;
  backgroundImage: string;
  width: number;
  aspect: number;
  padding: number;
  horizontalAlign: "left" | "right" | "center";
  verticalAlign: "top" | "bottom" | "center";
};

export declare type BoxElement = {
  key: string;
  type: "box";
  style: BoxStyle;
  layout: Element[][];
};

export declare type ReferenceElement = {
  key: string;
  type: "reference";
  apiUrl: string;
  styles: BoxStyle[];
  layout: Element[][];
};

export declare type ReferenceFieldElement = {
  key: string;
  type: "reference-field";
  fieldCode: string;
};

export declare type Element =
  | TextElement
  | FileElement
  | ReferenceElement
  | ReferenceFieldElement
  | BoxElement;

export declare type ElementType =
  | TextElement["type"]
  | FileElement["type"]
  | ReferenceElement["type"]
  | ReferenceFieldElement["type"]
  | BoxElement["type"];
