
export interface FieldConstraint {
  name:string;
  type: FieldType,
  defaultValue: string;
  mandatory: boolean;
  placeHolder: string;
  example: string;
  enumeration?: [string];
  validation?: FieldValidation;
}

export enum FieldType {
  INT, STRING, BOOLEAN
}

export interface FieldValidation {
  regex:string;
  notValidError:string;
}

export interface FieldProperty {
  label:string;
  name:string;
  value:string;
  constraint?:FieldConstraint;
}


