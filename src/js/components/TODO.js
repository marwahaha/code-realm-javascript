// Code for the TODO app goes here.
let todosList;
function populateTodos() {
    // let todosList = [{ name: 'TODO: 1', isOpen: true }];
    todosList = getState({ action: 'DISPLAY_TODOS_ONLOAD' });
    updateUI();
}

function setOpenOrClosed(id) {
    const todoItem = todosList.find(todo => todo.id === id);
    todoItem.isOpen = !todoItem.isOpen;
    todoList = getState({ action: 'TODO_UPDATED', data: todoItem });
    updateUI();
}


function deleteTodo(id) {
    todosList = getState({ action: 'TODO_DELETED', data: id });
    updateUI();
}

function addTodo() {
    let todoNameElem = document.getElementById('todoName');
    todosList = getState({ action: 'TODO_ADDED', data: todoNameElem.value });
    todoNameElem.value = '';
    updateUI();
}

function updateUI() {
    let listElem = document.getElementById('list');
    listElem.innerHTML = '';
    for (let todo of todosList) {
        listElem.innerHTML += (todo.isOpen) ? `
        <span>${todo.name}</span>
        <span><input type="checkbox" checked onclick="setOpenOrClosed(${todo.id})"></span>
        <button type="button" onclick="deleteTodo(${todo.id})">Delete</button><br>
        ` :
        `
        <span>${todo.name}</span>
        <span><input type="checkbox" onclick="setOpenOrClosed(${todo.id})"></span>
        <button type="button" onclick="deleteTodo(${todo.id})">Delete</button><br>
        `;
    }
}
