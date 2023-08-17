import { PhoneInfo } from './interfaces';

const phoneList: PhoneInfo[] = [
  {
    customerID: '0001',
    areaCode: '123',
    number: '555-1234',
  },
  {
    customerID: '0002',
    areaCode: '456',
    number: '555-5678',
  },
  {
    customerID: '0003',
    areaCode: '789',
    number: '555-7890',
  },
  {
    customerID: '0004',
    areaCode: '234',
    number: '555-2345',
  },
  {
    customerID: '0005',
    areaCode: '567',
    number: '555-6789',
  },
];

function listToDict<T>(
  list: T[],
  idGen: (arg: T) => string,
): { [k: string]: T } {
  const dict: { [k: string]: T } = {};

  list.forEach((element) => {
    const dictKey = idGen(element);
    dict[dictKey] = element;
  });

  return dict;
}

console.log(
  listToDict(phoneList, (item) => item.customerID),
);
