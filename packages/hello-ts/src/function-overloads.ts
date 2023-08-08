type FormSubmitHandler = (data: FormData) => void;
type MessageHandler = (evt: MessageEvent) => void;

function handleMainEvent(
  elem: HTMLFormElement,
  handler: FormSubmitHandler,
);
function handleMainEvent(
  elem: HTMLIFrameElement,
  handler: MessageHandler,
);

function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler,
) {}

const myFrame = document.getElementsByTagName('iframe')[0];
const myForm = document.getElementsByTagName('form')[0];

handleMainEvent(myFrame, (event) => {});
handleMainEvent(myForm, (event) => {});
