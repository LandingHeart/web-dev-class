const todoItems = {
  items: [
    {
      id: 0,
      item: "buy candy",
    },
    {
      id: 1,
      item: "buy box of water",
    },
    {
      id: 2,
      item: "buy groceries",
    },
  ],
};
const { items } = todoItems;

function displayList(items) {
  let ul = document.getElementById("ul-list-item");
  ul.innerHTML = "";
  items.forEach((ele, id) => {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let p = document.createElement("p");
    p.textContent = `${ele.item}`;
    btn.setAttribute("class", "delete-btn btn btn-primary");
    btn.textContent = "Delete";
    btn.addEventListener("click", () => {
      deleteItem(id);
    });
    li.setAttribute("id", "li-item");
    li.appendChild(p);
    li.appendChild(btn);
    ul.append(li);
  });
}

function addItem(item) {
  let inputValue = document.getElementById("input").value;
  const newId = items.length;
  const obj = { id: newId, item: inputValue };
  items.push(obj);
  displayList(items);
}

function deleteItem(index) {
  items.splice(index, 1);
  displayList(items);
}

function clearList() {
  let list = document.getElementById("ul-list-item");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

window.addEventListener("load", () => {
  displayList(items);
});
