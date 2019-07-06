// The core logic of the store will go here.


const todoList =($ctrl) =>{
$ctrl.todoList={};
if($ctrl.state.status.responseCode==='200'){
if($ctrl.state.data.todoList){
$ctrl.todoList=$ctrl.state.data.todoList;
return $ctrl.todoList;
};
};
};


const addTodoTask=($ctrl, item) =>{
if(item){
for(let prop in $ctrl.todoList{
 
   if($ctrl.todoList.hasOwnProperty(prop)){
 
       $ctrl.todoList[prop]=item[prop];
	$ctrl.todoList['Completed']=true;
};
};
return $ctrl.todoList;
};



const deleteTodoTask=($ctrl,index)=>{
if(index){
var todoList=$ctrl.todoList;
delete todoList[index];
$ctrl.todoList=todoList;
return $ctrl.todoList;
};
};







