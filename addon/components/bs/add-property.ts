import Component from '@glimmer/component';
import type {FieldConstraint, FieldProperty} from "bs-layout/components/bs/model/field-model";
import {tracked} from "@glimmer/tracking";

export interface BsAddPropertySignature {
  property:FieldProperty;
  constraint?:FieldConstraint;
  key?:string;
  readonly?:boolean;
  method?:string;
}

export default class BsAddProperty extends Component<BsAddPropertySignature> {
  @tracked text: string="";
  @tracked value: any;
  @tracked currentValue: any;
}
