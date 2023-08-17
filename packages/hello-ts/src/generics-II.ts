function wrapInArray<T>(arg: T): [T] {
  return [arg];
}

const numbers = wrapInArray(3);
const dates = wrapInArray(new Date());
