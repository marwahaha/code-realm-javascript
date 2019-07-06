// The core logic of the store will go here.
function filterOpenTODOS(arr) {
    return arr.filter(obj => obj.isOpen);
}
const initialState = [];
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
            const id = currentState.length ? currentState[currentState.length - 1].id + 1 : 1;
            const newTODO = { id: id, name: payload.data, isOpen: true };
            currentState.push(newTODO);
            console.log('ACTION:', payload.action);
            console.log('state', currentState);
            break;
    }
    const newState = filterOpenTODOS(currentState);
    return JSON.parse(JSON.stringify(newState));
}