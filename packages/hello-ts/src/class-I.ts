class Car {
  protected vinNumber = this.generateVinNumber();
  private doorLockCode = this.generateDoorLockCode();

  constructor(
    public make: string,
    public model: string,
    public year: number,
  ) {}

  protected unlockAllDoors() {
    return `Unlocking doors using ${this.doorLockCode}`;
  }

  private generateVinNumber() {
    return 'XXXX'.repeat(4);
  }

  private generateDoorLockCode() {
    return '123456789';
  }
}

class Sedan extends Car {
  constructor(make: string, model: string, year: number) {
    super(make, model, year);
    console.log(`Vin Number = ${this.vinNumber}`);
  }

  public unlock() {
    console.log('Unlocking at ' + new Date().toISOString());
    console.log(this.unlockAllDoors());
  }
}

let s = new Sedan('Honda', 'Accord', 2017);
s.unlock();
