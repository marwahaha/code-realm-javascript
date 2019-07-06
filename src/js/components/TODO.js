// Code for the TODO app goes her

var toDoDisplayList = (function(){
    var toDoListToDisplay = toDOStore.getToDoList();

    function getListToDisplay (list){
         toDoListToDisplay = list;
         if(toDoListToDisplay){
           var htmlToAppend = ''
           for(let i =0 ;i<toDoListToDisplay.length;i++){
             if(toDoListToDisplay[i]){
               htmlToAppend += '<li>'+toDoListToDisplay[i].description+'<input type="button" value="Delete Task" onclick = "deleteTask();"></li>';
               
            }
          }
            document.getElementById('taskList').innerHTML = htmlToAppend;
         }
    };

    function addTask(){
        var description = document.getElementById('todoTask').value;
        toDoListToDisplay = toDOStore.addItemToDoList(toDoListToDisplay,description);
        getListToDisplay(toDoListToDisplay);
    }

     function deleteTask(){
        var description = document.getElementById('todoTask').value;
        toDoListToDisplay = toDOStore.addItemToDoList(toDoListToDisplay,description);
        getListToDisplay(toDoListToDisplay);
    }

    return {
      getListToDisplay: getListToDisplay,
      addTask : addTask,
      deleteTask: deleteTask


    }
}) ();