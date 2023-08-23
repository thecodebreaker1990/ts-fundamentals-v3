import { PhoneInfo, HasId, Dict } from './interfaces';

const phoneList: PhoneInfo[] = [
  {
    id: '0001',
    areaCode: '123',
    number: '555-1234',
  },
  {
    id: '0002',
    areaCode: '456',
    number: '555-5678',
  },
  {
    id: '0003',
    areaCode: '789',
    number: '555-7890',
  },
  {
    id: '0004',
    areaCode: '234',
    number: '555-2345',
  },
  {
    id: '0005',
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

function listWithIdToDict<T extends HasId>(
  list: T[],
): Dict<T> {
  const dict: Dict<T> = {};

  for (let item of list) {
    dict[item.id] = item;
  }

  return dict;
}

console.log(listToDict(phoneList, (item) => item.id));
