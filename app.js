// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.textContent = todoText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => {
                todoList.removeChild(todoItem);
            });

            todoItem.addEventListener('click', () => {
                todoItem.classList.toggle('completed');
            });

            todoItem.appendChild(deleteBtn);
            todoList.appendChild(todoItem);
            todoInput.value = '';
        }
    }
});