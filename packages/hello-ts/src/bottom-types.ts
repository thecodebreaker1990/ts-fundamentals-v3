class UnreachableError extends Error {
  constructor(_nvr: never, message: string) {
    super(message);
  }
}

class Bike {
  drive() {
    console.log('Vroom!');
  }
}

class Truck {
  tow() {
    console.log('Dragging something!');
  }
}

class Boat {
  isFloating() {
    return true;
  }
}

function obtainRandomVehicle(): Vehicle {
  const random = Math.ceil(Math.random() * 10) + 1;
  return random < 5 ? new Bike() : new Truck();
}

type Vehicle = Bike | Truck | Boat;

let myVehicle = obtainRandomVehicle();

if (myVehicle instanceof Bike) {
  myVehicle.drive();
} else if (myVehicle instanceof Truck) {
  myVehicle.tow();
} else {
  throw new UnreachableError(
    myVehicle,
    `Unexpected vehicle type: ${myVehicle}`,
  );
}
