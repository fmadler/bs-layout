import _ from 'lodash';

export default function bsUtilsStringUtils() {
  return true;
}

const startDelimiter = '${';
const endDelimiter = '}';

export function replaceParams(s, params) {
  params.forEach((p) => {
    if (p.value) {
      s = s.replaceAll('${' + p.name + '}', p.value);
    }
  });
  return s;
}
export function extractParams(s) {
  let ret = [];
  if (s !== undefined && s != null) {
    let end = s.indexOf(endDelimiter);
    while (end > 0) {
      let start = s.indexOf(startDelimiter);
      if (start == -1) {
        break;
      }
      end = s.indexOf(endDelimiter);
      if (end > start) {
        //end delimiter '}' can be for other purpose than wrapping a param (especially in json)
        let v = s.substring(
          start + 2, //start delimiter length is 2
          end,
        );
        if (ret.filter((p) => p.name === v).length === 0) {
          ret.push({
            label: v,
            name: v,
            value: '',
            currentValue: startDelimiter + v + endDelimiter,
          });
        }
      }

      s = s.substring(end + 1);
      end = s.indexOf(endDelimiter);
    }
  }
  return ret;
}

export function applyConstraint(params, constraints) {
  _.each(params, (p, index) => {
    let constr = _.find(constraints, { name: p.name });
    if (constr) {
      params[index].constraint = constr;
      if (constr.defaultValue) {
        params[index].value = constr.defaultValue;
      }
    }
  });
  return params;
}

export function fillAttributeViewPreviousValues(params, previousParams) {
  _.each(params, (p, index) => {
    let previousParam = _.find(previousParams, { name: p.name });
    if (previousParam) {
      params[index] = previousParam;
    }
  });
  return params;
}
