import Component from '@glimmer/component';
import {action} from "@ember/object";

export interface BsFormButtonSignature {
  // The arguments accepted by the component
  Args: {};
  // Any blocks yielded by the component
  Blocks: {
    default: []
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class BsFormButton extends Component<BsFormButtonSignature> {
  @action
  call(fn:any) {
    fn();
  }
}
