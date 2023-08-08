import { TwoNumberCalculation } from './interfaces';

const add: TwoNumberCalculation = (a, b) => a + b;

function invokeInFourSeconds(callback: () => undefined) {
  setTimeout(callback, 4000);
}

function invokeInFiveSeconds(callback: () => void) {
  setTimeout(callback, 5000);
}

const values: number[] = [];
invokeInFourSeconds(() => values.push(4));
invokeInFiveSeconds(() => values.push(5));
