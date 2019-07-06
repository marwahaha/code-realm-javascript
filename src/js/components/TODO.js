// Code for the TODO app goes here.
const addTask = () => {

    let task = document.getElementById('newtask').value;
    addtoStore(task);
    document.getElementById('newtask').value = null;
    console.log(store);
    onload();
};

const moveTask = (id, status) => {
    changeState(id, status);
    onload();
};

const listOpenTask = () => {
    let list = '';
    Object.keys(store).map(key => {
        if (store[key].status == "OPEN") {
            list += `<div><span>${store[key].name}</span>  <span class="btn btn-outline-primary" onClick=moveTask('${store[key].id}','DONE')>Move to Done</span> </div>`;
        }
    });
    if(list == '') {list = '<div>No Task available</div>';}
    document.getElementById("opentask").innerHTML = list;
}

const listDoneTask = () => {
    let list = '';
    Object.keys(store).map(key => {
        if (store[key].status == "DONE") {
            list += `<div><span>${store[key].name}</span> <span class="btn btn-outline-primary" onClick=moveTask('${store[key].id}','OPEN')>Move to Open</span> </div>`;
        }
    });

    if(list == '') {list = '<div>No Task available</div>';}
    document.getElementById('donetask').innerHTML = list;
}

listOpenTask();
listDoneTask();

const onload = () => {
    listOpenTask();
    listDoneTask();
}

onload();