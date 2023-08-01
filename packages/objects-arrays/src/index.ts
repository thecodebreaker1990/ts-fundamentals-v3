type Car = {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
};

function printCar(car: Car) {
  let str = `${car.make} ${car.model} ${car.year}`;
  if (typeof car.chargeVoltage !== 'undefined') {
    str = `//${car.chargeVoltage}v`;
  }
  return str;
}

const bmwCar: Car = {
  make: 'Tesla',
  model: 'Model 3',
  year: 2022,
  chargeVoltage: 220,
};

console.log(printCar(bmwCar));
