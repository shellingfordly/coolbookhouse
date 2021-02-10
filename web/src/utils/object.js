export function useObj1KeyCopyObj2Val(obj1, obj2) {
  const obj = {};
  for (const key in obj1) {
    if (Reflect.has(obj1, key)) {
      obj[key] = obj2[key];
    }
  }
  return obj;
}