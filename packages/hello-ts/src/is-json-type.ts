type Primitive = number | string | boolean | null;
type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = Primitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {}

console.log(isJSON('hello'));
console.log(isJSON([4, 8, 15, 16, 23, 42]));
console.log(isJSON(() => ''));
