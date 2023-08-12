interface CarLike {
  make: string;
  model: string;
  year: number;
}

let maybeCar: unknown;

function isCarLike(
  valueToTest: any,
): valueToTest is CarLike {
  const isObject =
    valueToTest && typeof valueToTest === 'object';

  if (isObject) {
    const isMakerAvailable =
      typeof valueToTest?.make === 'string';
    const isModelAvailable =
      typeof valueToTest?.model === 'string';
    const isYearAvailable =
      typeof valueToTest?.year === 'number';

    return (
      isMakerAvailable &&
      isModelAvailable &&
      isYearAvailable
    );
  }
  return false;
}

if (isCarLike(maybeCar)) {
  maybeCar;
}
