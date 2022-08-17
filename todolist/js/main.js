function addItem() {
  let inputVal = document.getElementById("input").value;
  let ul = document.getElementById("ul-list-item");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(`${inputVal}`));
  ul.appendChild(li);
}
