// Code for the TODO app goes here.
$(document).ready(function() {
	var todoContainer = document.getElementById("todo-items");
	var todoItems = todoList.items;

	// this will move in lib
	var addItems = function(allItems) {
		todoContainer.innerHTML = "";
		for (var i=0; i<allItems.length;i++) {
			var node = document.createElement("p");
			var textnode = document.createTextNode(allItems[i].name);
			node.appendChild(textnode); 
			todoContainer.appendChild(node);
		}
	}

	// this will move in lib
	var basicCopy = function() {
		let objCopy = {}; // objCopy will store a copy of the mainObj
  		let key;
  		for (key in mainObj) {
  			objCopy[key] = mainObj[key];
  		}
	}

	// this will move in lib
	var copy = function(mainObj) {
  		let objCopy = {}; // objCopy will store a copy of the mainObj
  		let key;
  		for (key in mainObj) {
  			if(typeof(mainObj[key]) === "object") {
  				if(Array.isArray(mainObj[key])) {
  					objCopy[key] = Array.from(mainObj[key]);	
  				} else {
  					objCopy[key] = basicCopy(mainObj[key]);
  				}
  			} else {
    			objCopy[key] = mainObj[key]; // copies each property to the objCopy object
  			}
  		}
  		return objCopy;
	}


	addItems(states[stateCount].items);

	$(".add-button").on("click",function(){
		var itemName = $(".item-name").val();
		var newTodoItems = copy(states[stateCount]);
		newTodoItems.items.push({
			name:itemName,
			status:"open"
		});
		stateCount++;
		states.push(newTodoItems)
		addItems(states[stateCount].items);
	})
})