function myClickHandler(
  this: HTMLButtonElement,
  event: Event,
) {
  this.disabled = true;
}

const myButton = document.getElementsByTagName('button')[0];
const boundHandler = myClickHandler.bind(myButton);
boundHandler(new Event('click'));
