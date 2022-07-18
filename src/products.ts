import { Product } from "../models/product-interface";

const products: Product[] = [
  {
    name: "cupcakes",
    price: 4.0,
  },
  {
    name: "pie",
    price: 7.0,
  },
  {
    name: "swiss roll",
    price: 5.0,
  },
];

const calcAverageProductPrice = (array: Product[]): number => {
  let sum = 0;
  if (array.length) {
    for (let item of array) {
      sum += item.price;
    }
    return sum / array.length;
  } else {
    return 0;
  }
};

const averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);

export { calcAverageProductPrice };
