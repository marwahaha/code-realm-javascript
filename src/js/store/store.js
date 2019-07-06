// The core logic of the store will go here.// The core logic of the store will go here.

const store = {};
const addtoStore = (task) => {
    let state = {...store};
    let date = new Date(); 
    let timestamp = date.getTime();
    let tempTask = {
        id:timestamp,
        name: task,
        status: "OPEN",
        user:"DEMO"
    }
    state =  Object.assign(state,{[timestamp]:tempTask});
    store[timestamp] = tempTask;    
};

const changeState = (id, status) => {
    //const state ={...store, store[id]:{...store[id],status:status}};
  //  let state = {...store};
   // store =  Object.assign({},...store,{...store[id],status:status});
   // console.log(state);
    store[id].status = status;   
};