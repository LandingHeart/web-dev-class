let num = 1.123;

let str = "i am str";

let obj = {
  key: "value",
};

// let arr = ["str", 1, { key: "value" }];

// console.log(arr);
const todoItems = {
  items: [
    { id: 0, item: "buy sugar" },
    {
      id: 1,
      item: "buy box water",
    },
    { id: 2, item: "buy groceries" },
  ],
};

const listItems = [
  { id: 0, item: "buy too much candy" },
  {
    id: 1,
    item: "buy box water",
  },
  {
    id: 2,
    item: "buy groceries",
  },
];

const { items } = todoItems;
window.addEventListener("load", () => {
  displayList(items);
});

// document.getElementsByClassName
// document.getElementById
// document.get
