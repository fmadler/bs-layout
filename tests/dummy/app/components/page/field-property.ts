import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
//import {type FieldConstraint, FieldType} from "@fmadler/bs-layout/components/bs/model/field-model";

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

  textWithPlaceholders=null

  constraints = [
    {
      name: 'param1',
      type: "STRING",
      defaultValue: 'name',
      mandatory: true,
      placeHolder: 'param1 placeholder',
    },
    {
      enumeration: ['paramA', 'paramB', 'paramC'],
      name: 'param2',
      type: "STRING",
      defaultValue: 'name',
      mandatory: true,
      placeHolder: 'param2 placeholder',
    }
  ];

  @tracked
  textWithPlaceholdersResult="";

  @tracked
  propertyMap=new Map();

  @tracked
  extractedParams:any;


}
