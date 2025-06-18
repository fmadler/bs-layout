import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export interface BsInputGroupSignature {
  class:string;
  text:string;
  enumeration?:string;
  type?:string;
  value:string;
  key?:string;
  readonly?:boolean;
  placeholder?:string;
}

export default class BsInputGroup extends Component<BsInputGroupSignature> {
  @tracked
  value = null;

  get enumerationList() {
    return this.args.enumeration?.split(',');
  }

  @action
  pickEnum(val: { target: { value: null; }; }) {
    this.value = val.target.value;
  }

}
