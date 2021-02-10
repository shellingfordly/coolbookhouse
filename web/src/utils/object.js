export function useObj1KeyCopyObj2Val(obj1, obj2) {
  const obj = {};
  for (const key in obj1) {
    if (Reflect.has(obj1, key)) {
      obj[key] = obj2[key];
    }
  }
  return obj;
}


export function objCopy(obj) {
  let newObj = {};
  if (typeof obj === 'object') {
    if (obj instanceof Array) newObj = ArrCopy(obj);
    else newObj = deepCopy(obj);
  } else newObj = obj;
  return newObj;
}

function deepCopy(object) {
  const newObj = {};
  for (const key in object) {
    if (Reflect.has(object, key)) {
      const element = object[key];
      if (typeof element === 'object') {
        if (element instanceof Date) newObj[key] = new Date(element);
        else if (element instanceof Array) newObj[key] = ArrCopy(element);
        else newObj[key] = objCopy(element);
      } else newObj[key] = element;
    }
  }
  return newObj;
}

function ArrCopy(arr) {
  const newArr = [];
  for (const item of arr) {
    if (typeof item === 'object') {
      if (item instanceof Date) newArr.push(new Date(item));
      else if (item instanceof Array) newArr.push(ArrCopy(item));
      else newArr.push(deepCopy(item));
    } else newArr.push(item);
  }
  return newArr;
}