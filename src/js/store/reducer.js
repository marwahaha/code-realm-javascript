function reducer(state, dispact) {
  const { type, payload } = dispact;

  if (type === "ADD_TODO") {
    return [...state, payload];
  } else if (type === "MARK_DONE") {
    for (let i = 0; i < state.length; i++) {
      const element = state[i];
      if (element.name === payload) {
        element.completed = true;
        break;
      }
    }

    return state;
  } else if (type === "MARK_UN_DONE") {
    for (let i = 0; i < state.length; i++) {
      const element = state[i];
      if (element.name === payload) {
        element.completed = false;
        break;
      }
    }

    return state;
  } else if (type === "REMOVE_TODO") {
    for (let i = 0; i < state.length; i++) {
      const element = state[i];
      if (element.name === payload) {
        state.splice(i, 1);
        break;
      }
    }

    return state;
  } else {
    return state;
  }
}

export default reducer;
