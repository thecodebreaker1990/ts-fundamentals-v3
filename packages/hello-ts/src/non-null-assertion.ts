type CartItem = { name: string; qty: number };

type GroceryCart = {
  fruits?: CartItem[];
  vegetables?: CartItem[];
};

const cart: GroceryCart = {};
cart!.fruits.push({ name: 'kumquat', qty: 2 });
