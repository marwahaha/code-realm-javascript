// The core logic of the store will go here.
class State {
  constructor(defaultValue) {
    this.value = defaultValue;
  }

  setState(value) {
    // TODO: set as imutable
    this.value = value;
  }
}

class Store {
  constructor(defaultState) {
    this.state = new State(defaultState);
    this.subscribers = [];
  }

  assignReducer(callBack) {
    this.reducer = callBack;
  }

  publish() {
    this.subscribers.forEach(subscriber => {
      subscriber(this.state.value);
    });
  }

  subscribe(callBack) {
    this.subscribers.push(callBack);
    callBack(this.state.value);
  }

  dispachAction(type, payload) {
    let state = this.reducer.call(this, this.state.value, { type, payload });

    this.state.setState(state);
    this.publish();
  }
}

export default Store;
