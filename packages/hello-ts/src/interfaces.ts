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
