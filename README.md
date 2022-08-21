# Table of contents

- [Table of contents](#table-of-contents)
  - [Introduction <a name="introduction"></a>](#introduction-)
  - [Project 1 To do list <a name="todolist"></a>](#project-1-to-do-list-)
  - [Project 2 To do list Advance <a name="todolist"></a>](#project-2-to-do-list-advance-)
    - [Sub paragraph <a name="subparagraph1"></a>](#sub-paragraph-)
  - [Another paragraph <a name="paragraph2"></a>](#another-paragraph-)
- [web-dev-class](#web-dev-class)

## Introduction <a name="introduction"></a>

基础 html css javascript 课程。

- 资源链接
  - https://www.w3schools.com/html/default.asp

## Project 1 To do list <a name="todolist"></a>

- vsCode
- html tags
  - h1 - h6, head, title, ul, button, form, input, p

```
  <div class="container todo" id="todo">
      <h1>To Do List</h1>
      <h2>Add item</h2>
      <input type="text" id="input" />
      <button class="btn btn-primary" onclick="AddItem()">Add item</button>
      <h3>To do list</h3>
      <ul id="ul-list-item">
        <li>item 1</li>
      </ul>
    </div>
```

```
body {
  background-color: white;
}

.todo {
  width: 800px;
  height: 800px;
  background-color: #f3f3f3;
  text-align: center;
  margin-top: 30px;
  border-radius: 5px;
}

li {
  font-size: x-large;
  background-color: white;
  width: 100%;
  height: auto;
  margin: 10px;
}

ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}


```

```
function AddItem() {
  let input = document.getElementById("input").value;
  let ul = document.getElementById("ul-list-item");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(`${input}`));
  ul.appendChild(li);
  console.log(input);
}

```

- css box model, padding, margin, border
- document object, DOM
  - document.getElmentById,
  - document.getElmentsByClassName
  - document.querySelector("p");

![todo](todo.jpg)

## Project 2 To do list Advance <a name="todolist"></a>

- json-server
- node js

### Sub paragraph <a name="subparagraph1"></a>

## Another paragraph <a name="paragraph2"></a>

# web-dev-class
