# Table of contents

- [Table of contents](#table-of-contents)
  - [Introduction <a name="introduction"></a>](#introduction-)
  - [Project 1 To do list <a name="todolist"></a>](#project-1-to-do-list-)
  - [Class 1 note <a name="note 1"></a>](#class-1-note-)
  - [Class 2 note <a name="note 2"></a>](#class-2-note-)
    - [Funtionality](#funtionality)
  - [Project 2 To do list Advance <a name="todolist"></a>](#project-2-to-do-list-advance-)
    - [Sub paragraph <a name="subparagraph1"></a>](#sub-paragraph-)
  - [Another paragraph <a name="paragraph2"></a>](#another-paragraph-)
- [web-dev-class](#web-dev-class)

## Introduction <a name="introduction"></a>

基础 html css javascript 课程。

- 资源链接
  - https://www.w3schools.com/html/default.asp

## Project 1 To do list <a name="todolist"></a>

## Class 1 note <a name="note 1"></a>

- vsCode
- html tags
  - h1 - h6, head, title, ul, button, form, input, p

```
  <body>
    <div class="container todo">
      <h1 id="h1" class="text-center">Todo List App</h1>
      <div class="form-group">
        <h2 for="itemInput">Add Item</h2>
        <input type="text" class="form-control" name="" id="input" />
      </div>
      <button id="addButton" class="btn btn-primary" onclick="addItem()">
        Add To List
      </button>
      <button id="clearButton" class="btn btn-danger">Clear Todo List</button>
      <h3>Todo List</h3>
      <ul id="ul-list-item"></ul>
    </div>
  </body>
```

```
.todo {
  width: 800px;
  height: 800px;
  background-color: #f3f3f3;
  border-radius: 5px;
  margin-top: 30px;
}
li {
  font-size: x-large;
  background-color: white;
  width: 100%;
  height: auto;
  margin-top: 10px;
  padding: 8px;
}

ul {
  padding: 0px;
  margin: 0px;
  list-style-type: none;
}

#input {
  height: 60px;
  font-size: x-large;
}
```

```
function AddItem() {
  let input = document.getElementById("input").value;
  let ul = document.getElementById("ul-list-item");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(`${input}`));
  ul.appendChild(li);
}


```

- css box model, padding, margin, border
- document object, DOM
  - document.getElmentById,
  - document.getElmentsByClassName
  - document.querySelector("p");

![todo](todo.jpg)

## Class 2 note <a name="note 2"></a>

### Funtionality

- Delete items, delete button, clear all
- javaScript
  - objects
  - callback funtion
  - obj destructuring
  - arrow functions
- Event Listners
  - Window.addEventListner('load', ()=>{})

## Project 2 To do list Advance <a name="todolist"></a>

- json-server
- node js

### Sub paragraph <a name="subparagraph1"></a>

## Another paragraph <a name="paragraph2"></a>

# web-dev-class
