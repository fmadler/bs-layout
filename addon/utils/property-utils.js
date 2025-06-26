//import {replaceProperty} from "./common-utils";

export function handleAddProperty(list, param, value, event) {
  if (event.target.type==='button') {
    replaceProperty(list, param, value);
  } else if (event.target.type==='select-one') {
    value = event.target.value
    replaceProperty(list, param, value);
  }
}

export function replaceProperty(list, param, value) {
  let paramToRemove = list.find(e=>{return e.name===param});
  if (paramToRemove) {
    let index = list.indexOf(paramToRemove);
    list[index] =
      {
        name: param,
        param : param, //todo remove duplicate
        value: value,
        currentValue: value,
        label: paramToRemove.label,
        // placeholder:paramToRemove.placeholder,
        constraint:paramToRemove.constraint,
      };


    return list;
  }
}
