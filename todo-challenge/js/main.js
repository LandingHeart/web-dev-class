const trainingList = [
  {
    id: 0,
    training: "Baseball Fetch Training",
  },
  {
    id: 1,
    training: "Obedient training",
  },
  {
    id: 2,
    training: "Walk the dog",
  },
  {
    id: 3,
    training: "Dog Tug of War",
  },
];

const completedList = [];

window.addEventListener("load", () => {
  displayList(trainingList);
  document.getElementById("complete").style.display = "none";
});
function showByTab(evt, name) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}

function displayList(trainingList) {
  let ul = document.getElementById("todo-list");
  ul.innerHTML = "";
  trainingList.forEach((ele, id) => {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let p = document.createElement("p");
    p.textContent = `${ele.training}`;
    btn.setAttribute("class", "delete-btn primary-btn");
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

function addItem() {
  let inputValue = document.getElementById("input").value;
  console.log(inputValue);
  const newId = trainingList.length;
  const obj = { id: newId, training: inputValue };
  trainingList.push(obj);
  displayList(trainingList);
}

function deleteItem(index) {
  displayCompleted(trainingList[index]);
  trainingList.splice(index, 1);
  displayList(trainingList);
}
function displayCompleted(deletedItem) {
  completedList.push(deletedItem);
  let ul = document.getElementById("completed-list");

  ul.innerHTML = "";
  completedList.forEach((ele, id) => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.textContent = `${ele.training}`;
    // btn.setAttribute("class", "delete-btn primary-btn");
    // btn.textContent = "Delete";
    li.setAttribute("id", "li-item");
    li.appendChild(p);
    ul.append(li);
  });
}
