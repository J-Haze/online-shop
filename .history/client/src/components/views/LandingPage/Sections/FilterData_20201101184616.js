const price = [
  {
    _id: 0,
    name: "Any",
    array: [],
  },
  {
    _id: 1,
    name: "$0 to $10",
    array: [0, 10],
  },
  {
    _id: 2,
    name: "$10 to $25",
    array: [10, 25],
  },
  {
    _id: 3,
    name: "$25 to $50",
    array: [25, 50],
  },
  {
    _id: 4,
    name: "$50 to $100",
    array: [50, 100],
  },
  {
    _id: 5,
    name: "More than $100",
    array: [100, 1500000],
  },
];

const gender = [
  {
    _id: 0,
    name: "All",
    array: [],
  },
  {
    _id: 1,
    name: "Men's",
    array: [1],
  },
  {
    _id: 2,
    name: "Women's",
    array: [2],
  },
];

const category = [
  {
    _id: 1,
    name: "Shirts",
  },
  {
    _id: 2,
    name: "Shorts",
  },
  {
    _id: 3,
    name: "Pants",
  },
];

export { price, category, gender };
