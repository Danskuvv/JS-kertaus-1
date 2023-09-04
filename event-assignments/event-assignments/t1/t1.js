'use strict';
// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

const ulElement = document.querySelector('ul'); // get ul element

todoList.forEach(todoItem => {
  const liElement = document.createElement('li');
  const liButton = document.createElement('button');

  liButton.textContent = 'Remove';

  liButton.addEventListener('click', function () {
    ulElement.removeChild(liElement);
    const index = todoList.indexOf(todoItem);
    if (index !== -1) {
      todoList.splice(index, 1);
      console.log('Updated todoList:', todoList); // removing of a task //
    }
  });

  const inputElement = document.createElement('input');
  inputElement.type = 'checkbox';
  inputElement.id = `todo-${todoItem.id}`;
  inputElement.checked = todoItem.completed; // Set the checkbox state based on completed property

  inputElement.addEventListener('change', function () {
    todoItem.completed = inputElement.checked;
    console.log('Updated todoList:', todoList); // Log the updated todoList
  });

  if (todoItem.completed) {
    inputElement.checked = true;
  }

  const labelElement = document.createElement('label');
  labelElement.htmlFor = `todo-${todoItem.id}`;
  labelElement.textContent = todoItem.task;

  liElement.appendChild(inputElement);
  liElement.appendChild(labelElement);
  liElement.appendChild(liButton);

  ulElement.appendChild(liElement);
});

const button = document.querySelector('.add-btn');

button.addEventListener('click', function () {
  document.querySelector('dialog').open = true;
});

const form = document.querySelector('form');
const taskName = document.querySelector('input[type="text"]'); // chooses first input element with the text type

form.addEventListener('submit', function (evt) {
  // ... prevent the default action.
  evt.preventDefault();

  const answer = taskName.value;

  const newTodoItem = {
    id: todoList.length + 1, // new id
    task: answer,
    completed: false, // new task task not completed
  };

  todoList.push(newTodoItem);
  console.log(answer);
  console.log(todoList);

  const liElement = document.createElement('li');
  const liButton = document.createElement('button');
  const labelElement = document.createElement('label');

  liButton.textContent = 'Remove';

  const inputElement = document.createElement('input');
  inputElement.type = 'checkbox';

  inputElement.addEventListener('change', function () {
    newTodoItem.completed = inputElement.checked;
    console.log('Updated todoList:', todoList); // Log the updated todoList
  });

  liButton.addEventListener('click', function () {
    ulElement.removeChild(liElement);
    const index = todoList.indexOf(newTodoItem);
    if (index !== -1) {
      todoList.splice(index, 1);
      console.log('Updated todoList:', todoList); // removing of a task //
    }
  });

  labelElement.textContent = answer;

  liElement.appendChild(inputElement);
  liElement.appendChild(labelElement);
  liElement.appendChild(liButton);
  ulElement.appendChild(liElement);

  document.querySelector('dialog').open = false; // closes dialog box //
});
