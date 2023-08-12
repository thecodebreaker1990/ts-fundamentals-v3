interface Person {
  name: string;
  age: number;
  sex: string;
  uid: string;
}

function isPerson(valueToTest: any): valueToTest is Person {
  return (
    valueToTest &&
    typeof valueToTest === 'object' &&
    typeof valueToTest?.name === 'string' &&
    typeof valueToTest?.age === 'number' &&
    typeof valueToTest?.sex === 'string' &&
    typeof valueToTest?.uid === 'string'
  );
}

function assertsIsPerson(
  valueToTest,
): asserts valueToTest is Person {
  if (!isPerson(valueToTest)) {
    throw new Error(
      `Value does not appear to be a Person ${valueToTest}`,
    );
  }
}

let maybePerson: unknown = {
  name: 'Alapan Chatterjee',
  age: 33,
  sex: 'Male',
  uid: 'AOQPC7047F',
};

assertsIsPerson(maybePerson);

console.log(maybePerson);
