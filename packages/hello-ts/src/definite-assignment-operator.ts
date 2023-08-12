class ThingsWithAsyncSetup {
  setupPromise: Promise<any>;
  isSetup!: Boolean;

  constructor() {
    this.setupPromise = new Promise((resolve) => {
      this.isSetup = false;
      return this.doSetup();
    }).then(() => {
      this.isSetup = true;
    });
  }

  private doSetup() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }
}
