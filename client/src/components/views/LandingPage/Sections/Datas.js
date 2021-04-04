const price = [
  {
    _id: 0,
    name: "Any",
    array: [],
  },
  {
    _id: 1,
    name: "$0 to $29",
    array: [0, 29],
  },
  {
    _id: 2,
    name: "$30 to $59",
    array: [30, 59],
  },
  {
    _id: 3,
    name: "$60 to $89",
    array: [60, 89],
  },
  {
    _id: 4,
    name: "$90 to $99",
    array: [90, 99],
  },
  {
    _id: 5,
    name: "$100 above",
    array: [100, 1000000],
  },
];
const clothKinds = [
  { _id: 1, name: "Tops" },
  { _id: 2, name: "Bottoms" },
  { _id: 3, name: "Dresses" },
  { _id: 4, name: "Jackets" },
  { _id: 5, name: "Sleepwear" },
  { _id: 6, name: "Twopiece" },
  { _id: 7, name: "Accessories" },
  { _id: 8, name: "Socks" },
  { _id: 9, name: "Shoes" },
];

export { price, clothKinds };
