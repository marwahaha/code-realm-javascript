// The core logic of the store will go here.
var toDOStore = function (){
  var toDoList = [] ;
  var item = {
      'id':'',
      'description':'',
      'state':''
  };

  function getToDoList () {
   return toDoList;
  };

/*  function getToDoItem (item){
    for(let x in toDoList){
      if(toDoList[x].id === item.id){
        return toDoList[x];
      }

    }
  };

  function setToDoItem (item){
   for(let x in toDoList){
      if(toDoList[x].id === item.id){
        return toDoList.push(item);
      }

    }
  };*/

  function addItemToDoList (updatedList,item){
    var itemId = 0;
    if(updatedList){
        itemId = updatedList.length+1;
    }
     return [].concat(updatedList, {'id':itemId,'description': item,'state':'isOpen'})
    


//      toDoList.push({'id':toDoList.length+1,'description': item,'state':'isOpen'});
  };

  function removeItemToDoList (updatedList,item){
     return updatedList.slice(0,item.id).concat(updatedList.slice(item.id+1));
  };

  function setTaskToCompleted (item){
    for(let x in toDoList){
      if(toDoList[x].id === item.id){
        toDoList[x].state = 'isCompleted';
        return toDoList;
      }

    }
  }

    function setTaskToOpen (item){
    for(let x in toDoList){
      if(toDoList[x].id === item.id){
        toDoList[x].state = 'isOpen';
        return toDoList;
      }

    }
  }

  return {
    getToDoList: getToDoList,

    setTaskToOpen: setTaskToOpen,
    setTaskToCompleted: setTaskToCompleted,
    addItemToDoList: addItemToDoList,
    removeItemToDoList: removeItemToDoList


  }


}();