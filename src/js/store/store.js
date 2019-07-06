// The core logic of the store will go here.
function filterOpenTODOS(arr) {
    return arr.filter(obj => obj.isOpen);
}
const initialState = [{
    id: 1,
    name: 'Todo 1',
    isOpen: true
}];
let currentState;
let idx;
function getState(payload) {
    switch(payload.action) {
        case 'DISPLAY_TODOS_ONLOAD':
            currentState = initialState;
            console.log('ACTION:', payload.action);
            console.log('state', currentState);
            break;
        case 'TODO_UPDATED':
            idx = currentState.findIndex(c => c.id === payload.data.id);
            currentState.splice(idx, 1, payload.data);
            console.log('ACTION:', payload.action);
            console.log('state', currentState);
            break;
        case 'TODO_DELETED':
            idx = currentState.findIndex(c => c.id === payload.data);
            currentState.splice(idx, 1);
            console.log('ACTION:', payload.action);
            console.log('state', currentState);
            break;
        case 'TODO_ADDED':
            const newTODO = { id: currentState[currentState.length - 1].id + 1, name: payload.data, isOpen: true };
            currentState.push(newTODO);
            console.log('ACTION:', payload.action);
            console.log('state', currentState);
            break;
    }
    const newState = filterOpenTODOS(currentState);
    return JSON.parse(JSON.stringify(newState));
}