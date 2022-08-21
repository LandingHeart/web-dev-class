function AddItem() {
  let input = document.getElementById("input").value;
  let ul = document.getElementById("ul-list-item");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(`${input}`));
  ul.appendChild(li);
  console.log(input);
}
