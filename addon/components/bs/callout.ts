import Component from '@glimmer/component';

import { action } from '@ember/object';
import {tracked} from "@glimmer/tracking";

export interface BsCalloutSignature {
  style:string;
  key:string;
}

export default class BsCallout extends Component<BsCalloutSignature> {

  @tracked toggle: boolean=false;

  @action
  toggleIt() {
    this.toggle = !this.toggle;
  }

}
