import { AnimalLike, CanBark } from './interfaces';

class LivingOrganism {
  isAlive() {
    return true;
  }
}

class Dog
  extends LivingOrganism
  implements AnimalLike, CanBark
{
  bark() {
    return 'woof!';
  }
  eat(food: string) {
    return `Loves to eat: ${food}`;
  }
}

const jimmy = new Dog();
console.log(jimmy.eat('chicken'));
