import Mountain from "../models/mountain-interface";

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountain = (array: Mountain[]): string => {
  if (array.length) {
    let tallestMountain: Mountain = array[0];
    array.forEach((item) => {
      if (item.height > tallestMountain.height) {
        tallestMountain = item;
      }
    });
    return tallestMountain.name;
  } else {
    return `""`;
  }
};

const tallest = findNameOfTallestMountain(mountains);
console.log(tallest);

// console.log(findNameOfTallestMountain(mountains));

export { findNameOfTallestMountain };
