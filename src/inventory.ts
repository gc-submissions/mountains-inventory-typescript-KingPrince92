import { InventoryItem } from "../models/inventory-interface";

const inventory: InventoryItem[] = [
  {
    product: {
      name: "motor",
      price: 10.0,
    },
    quantity: 10,
  },
  {
    product: {
      name: "sensor",
      price: 12.5,
    },
    quantity: 4,
  },
  {
    product: {
      name: "LED",
      price: 1.0,
    },
    quantity: 20,
  },
];

const calcInventoryValue = (array: InventoryItem[]): number => {
  let sum = 0;
  for (let item of array) {
    sum += item.product.price * item.quantity;
  }
  return sum;
};

const calcInventoryAnswer: number = calcInventoryValue(inventory);

console.log(calcInventoryAnswer);

export { calcInventoryValue };
