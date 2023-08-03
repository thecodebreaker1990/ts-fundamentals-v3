type NestedNumbers = number | NestedNumbers[];

const val: NestedNumbers = [3, 4, [5, 6, [7], 59], 221];

val.push(41);
