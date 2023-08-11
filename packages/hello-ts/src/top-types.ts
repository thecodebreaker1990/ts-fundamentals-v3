let flexible: any = 4;
flexible = 'Download some more ram';
flexible = window.document;

let myUnknow: unknown = 4;
if (typeof myUnknow === 'string') {
  console.log(myUnknow, 'is a string');
} else if (typeof myUnknow === 'number') {
  console.log(myUnknow, 'is a number');
} else {
  console.log(
    myUnknow,
    'is anything except string or number',
  );
}
