// Code for the TODO app goes here.

var doToList = [];

function addTask() {
    var tName = document.getElementById('task_name').value;
    var taskObj = {name: tName, state: 'open'};
    doToList.push(taskObj);
    addTaskToTable(taskObj);
}

function addTaskToTable(taskObj) {
    var toDoListTable = document.getElementById('toDo-list');
    var tableBody = toDoListTable.getElementsByTagName('tbody');

    // Add a row
    var newRow = tableBody.insertRow();

    // Add columns
    addCell(newRow, generateTextNode(taskObj.name), 0);
    addCell(newRow, genrateActionButton({text: taskObj.state, id: doToList.length-1}), 1);
    addCell(newRow, genrateActionButton({text: 'Delete', id: doToList.length-1}), 2);
}

function removeTaskFromTable(id) {
    var toDoListTable = document.getElementById('toDo-list');
    var tableBody = toDoListTable.getElementsByTagName('tbody');

    tableBody.removeChild(tableBody.childNodes[id]);  
}

function addCell(bodyEl, el, pos) {
    var newCell = el.insertCell(pos);
    newCell.appendChild(el);
}

function generateTextNode(text) {
    return document.createTextNode(text);
}

function genrateActionButton(config) {
    var buttonElement = document.createElement('button');
    var buttonText = document.createTextNode(config.text);

    buttonElement.appendChild(buttonText);
    if(config.text == 'delete') {
        buttonElement.addEventListener("click", deleteTask.bind(buttonElement, config.id));
    } else {
        buttonElement.addEventListener("click", changeState.bind(buttonElement, config.id));
    }
    return buttonElement;
}

function changeState(id) {
    var task = doToList[id];
    if(task.state == 'open') {
        this.innerHTML = 'Completed';
        task.state = 'Completed';
    } else {
        this.innerHTML = 'Open';
        task.state = 'Open';
    }
}

function deleteTask(id) {
    doToList.splice(id, 1);
    removeTaskFromTable(id);
}