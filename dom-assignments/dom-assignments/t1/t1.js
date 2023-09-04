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
  const checkboxHTML = `
    <input type="checkbox" id="todo-${todoItem.id}" ${
      todoItem.completed && 'checked'
    }>
    <label for="todo-${todoItem.id}">${todoItem.task}</label>
  `;

  ulElement.insertAdjacentHTML('beforeend', `<li>${checkboxHTML}</li>`);
});
