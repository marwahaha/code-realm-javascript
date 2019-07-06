getList();
function addTask() {
  const taskName = document.getElementById("task-name").value;
  addInStore(taskName);
  getList();
  document.getElementById("task-name").value = "";
}

function getList() {
  const toDoList = listStore();
  const toDoListDiv = document.getElementById("to-do-list");
  toDoList.forEach(todoItem => {
    if (!todoItem.added) {
      console.log(todoItem);
      const toDoItemDiv = document.createElement("div");
      const toDoItemButton = document.createElement("button");
      const toDoItemDelButton = document.createElement("button");

      toDoItemDiv.textContent = todoItem.name;
      toDoItemDiv.setAttribute("id", todoItem.name);

      toDoItemButton.textContent = "Mark as completed";
      toDoItemButton.onclick = function() {
        markAsCompleted(todoItem.name);
      };
      toDoItemDelButton.textContent = "Delete";
      toDoItemDelButton.onclick = function() {
        deleteTask(todoItem.name);
      };
      toDoItemDiv.appendChild(toDoItemButton);
      toDoItemDiv.appendChild(toDoItemDelButton);

      toDoListDiv.appendChild(toDoItemDiv);
      todoItem.added = true;
    } else {
      const toDoItemtDiv = document.getElementById(todoItem.name);
      if (todoItem.status == "open") {
        toDoItemtDiv.childNodes[1].textContent = "Mark as completed";
      } else {
        toDoItemtDiv.childNodes[1].textContent = "Open";
      }
    }
  });
}

function markAsCompleted(name) {
  changeStatus(name);
  getList();
}

function deleteTask(name) {}
