// Code for the TODO app goes here.
document.getElementById("app").innerHTML = `
  Task name: <input id="addTaskInput" type="text" name="name">
  </br>
  </br>
  <button id="addTask">Add New Task</button>
  <button id="delTask">deleteTask</button>
  
  <div id="todoTasksDiv">
    <h2>Open TODO Tasks</h2>
  </div>
  <div id="completedTasksDiv">
    <h2>Completed Tasks</h2>
  </div>
`;

document.getElementById("addTask").onclick = function(event) {
  let taskName = document.getElementById("addTaskInput").value;
  let currState = getState();

  if (currState.todoTasks.length === 0) {
    currState.todoTasks.push(taskName);
    document.getElementById("todoTasksDiv").innerHTML +=
      `<ul>
    <li>` +
      taskName +
      `&nbsp;<button id="` +
      taskName +
      `">Mark Complete</button></li>
    </ul>`;
  } else {
    currState.todoTasks.push(taskName);
    
    var todoDiv = document.getElementById("todoTasksDiv");
    todoDiv.innerHTML = `<ul>`;

    for (let i = 0; i < currState.todoTasks.length; i++) {
      let oldContent = todoDiv.innerHTML;
      todoDiv.innerHTML =
        oldContent +
        `<li>` +
        currState.todoTasks[i] +
        `&nbsp;<button id="` +
        currState.todoTasks[i] +
        `">Mark Complete
      </button>
      </li>
      </br>`;
    }

    todoDiv.innerHTML += `</ul>`;
  }

  changeStateObj("todoTasks", currState.todoTasks);
};

function onMarkComplete(_buttonId) {
  alert(_buttonId);
}
