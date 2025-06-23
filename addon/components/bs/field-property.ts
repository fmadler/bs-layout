import Component from '@glimmer/component';
import {action} from "@ember/object";
import {tracked} from "@glimmer/tracking";
import {extractParams, replaceParams} from "@fmadler/bs-layout/utils/string-utils"

export interface FieldPropertySignature {
  // The arguments accepted by the component
  Args: {};
  // Any blocks yielded by the component
  Blocks: {
    default: []
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class FieldProperty extends Component<FieldPropertySignature> {

  @tracked
  textWithPlaceholdersInit=this.args.input;
  @tracked
  textWithPlaceholders=this.args.input;

  @tracked
  textWithPlaceholdersResult="";

  @tracked
  propertyMap=new Map();

  @tracked
  extractedParams:any=extractParams(this.textWithPlaceholders);

  @tracked
  showExtractPropertyButton:boolean=this.extractedParams===null;

  @action
  onChange(event:any) {
    this.showExtractPropertyButton;
  }

  get textWithPlaceholdersHasChanged () {
    return this.textWithPlaceholdersInit !== this.textWithPlaceholders
  }

  @action
  callback(propName:string, propValue:string, event:any) {
    this.propertyMap.set(propName,{name:propName, value:propValue});
    this.textWithPlaceholdersResult = replaceParams(this.textWithPlaceholders, this.propertyMap);
  }

  @action
  extractElements() {
    this.extractedParams = extractParams(this.textWithPlaceholders);
  }

}
