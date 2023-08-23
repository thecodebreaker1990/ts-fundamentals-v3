interface Animal {
  isAlive(): boolean;
}

interface Mammal extends Animal {
  getFurOrHairColor(): string;
}

export interface AnimalLike {
  eat(food): void;
}

export interface CanBark {
  bark(): string;
}

export interface TwoNumberCalculation {
  (x: number, y: number): number;
}

export interface PhoneInfo extends HasId {
  areaCode: string;
  number: string;
}

export interface HasId {
  id: string;
}

export interface Dict<T> {
  [k: string]: T;
}
