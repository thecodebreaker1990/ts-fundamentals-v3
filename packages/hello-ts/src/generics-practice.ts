const fruits = {
  apple: { color: 'red', mass: 100 },
  grape: { color: 'red', mass: 5 },
  banana: { color: 'yellow', mass: 183 },
  lemon: { color: 'yellow', mass: 80 },
  pear: { color: 'green', mass: 178 },
  orange: { color: 'orange', mass: 262 },
  raspberry: { color: 'red', mass: 4 },
  cherry: { color: 'red', mass: 5 },
};

interface Dict<T> {
  [k: string]: T;
}

function mapDict<T, S>(
  inputDict: Dict<T>,
  mapFunction: (original: T, key: string) => S,
): Dict<S> {
  const outputDict: Dict<S> = {};

  Object.keys(inputDict).forEach((dictKey) => {
    const thisValue = inputDict[dictKey];
    outputDict[dictKey] = mapFunction(thisValue, dictKey);
  });

  return outputDict;
}

function filterDict<T>(
  inputDict: Dict<T>,
  filterFunction: (element: T) => boolean,
): Dict<T> {
  const outputDict: Dict<T> = {};

  Object.keys(inputDict).forEach((dictKey) => {
    const thisValue = inputDict[dictKey];
    if (filterFunction(thisValue))
      outputDict[dictKey] = thisValue;
  });

  return outputDict;
}

function reduceDict<T, S>(
  inputDict: Dict<T>,
  reduceFunction: (
    currentVal: S,
    dictItem: T,
    key: string,
  ) => S,
  defaultValue: S,
): S {
  let value = defaultValue;

  Object.keys(inputDict).forEach((dictKey) => {
    const thisValue = inputDict[dictKey];
    value = reduceFunction(value, thisValue, dictKey);
  });

  return value;
}

const fruitsWithKgMass = mapDict(fruits, (fruit, name) => ({
  ...fruit,
  kg: 0.001 * fruit.mass,
  name,
}));

const oneOfEachFruitMass = reduceDict(
  fruits,
  (currentMass, fruit) => currentMass + fruit.mass,
  0,
);
