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

// const items = [
//   { id: 0, item: "buy candy" },
//   {
//     id: 1,
//     item: "buy box water",
//   },
//   { id: 2, item: "buy groceries" },
// ];

const { items } = todoItems;
window.addEventListener("load", () => {
  displayList(items);
});

// document.getElementsByClassName
// document.getElementById
// document.get

function displayList(items) {
  let ul = document.getElementById("ul-list-item");
  ul.innerHTML = "";
  items.forEach((element, id) => {
    let ul = document.getElementById("ul-list-item");
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let p = document.createElement("p");
    p.textContent = `${element.item}`;
    btn.setAttribute("class", "delete-btn btn btn-primary");
    btn.textContent = "Delete";
    btn.addEventListener("click", () => {
      deleteItem(id);
    });
    li.setAttribute("id", "li-item");
    li.appendChild(p);
    li.appendChild(btn);
    ul.appendChild(li);
  });
}

function deleteItem(id) {
  const { items } = todoItems;
  items.splice(id, 1);
  displayList(items);
}

function clearList() {
  let list = document.getElementById("ul-list-item");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
