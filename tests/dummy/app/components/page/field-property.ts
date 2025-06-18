import Component from '@glimmer/component';
import {action} from "@ember/object";
import {tracked} from "@glimmer/tracking";
import {extractParams, replaceParams} from "@fmadler/bs-layout/utils/string-utils"

export interface PageFieldPropertySignature {
  // The arguments accepted by the component
  Args: {};
  // Any blocks yielded by the component
  Blocks: {
    default: []
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class PageFieldProperty extends Component<PageFieldPropertySignature> {

  @tracked
  textWithPlaceholders=null

  @tracked
  textWithPlaceholdersResult=this.textWithPlaceholders;

  @tracked
  extractedParams:any;
  @action
  callback(propName:string, propValue:string, event:any) {
    this.textWithPlaceholdersResult = replaceParams(this.textWithPlaceholdersResult||this.textWithPlaceholders, [{name:propName, value:propValue}]);
  }

  @action
  extractElements() {
    this.extractedParams = extractParams(this.textWithPlaceholders);
    debugger;
  }
}
