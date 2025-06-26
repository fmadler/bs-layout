import Component from '@glimmer/component';
import {action} from "@ember/object";
import {tracked} from "@glimmer/tracking";
import {applyConstraint, extractParams, replaceParams} from "../../utils/string-utils"
import {replaceProperty} from "../../utils/property-utils";

export default class FieldProperty extends Component{

  @tracked
  textWithPlaceholdersInit=this.args.input;
  @tracked
  textWithPlaceholders=this.args.input;

  @tracked
  textWithPlaceholdersResult="";

  @tracked
  propertyMap=new Map();

  @tracked
  extractedParams=this.extractAndEnrichParams();

  @tracked
  showExtractPropertyButton=false;

  @action
  onChange(event) {
    this.showExtractPropertyButton=true;
  }

  extractAndEnrichParams() {
    let params = extractParams(this.textWithPlaceholders);
    let constraints= this.args.constraints;
    applyConstraint(params, constraints);
    return params;
  }

  @action
  callback(propName, propValue, event) {
    if (event.target.type === 'button') {
      this.propertyMap.set(propName, {name: propName, value: propValue, currentValue: propValue});
    } else if (event.target.type==='select-one') {
      let value = event.target.value
      this.propertyMap.set(propName, {name: propName, value: value, currentValue: value});
    }
    this.textWithPlaceholdersResult = replaceParams(this.textWithPlaceholders, this.propertyMap);
    this.extractedParams = replaceProperty(this.extractedParams, propName, propValue);
  }

  @action
  extractElements() {
    this.extractedParams = extractParams(this.textWithPlaceholders);
  }

}
