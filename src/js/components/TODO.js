// Code for the TODO app goes here.
import React, { Component } from "react";
class TODO extends Component {
  state = {
    newTask: "",
    task:{}
  };

  onInputChange(event = { target: { name: "", value: "" } }) {
    const { name, value } = event.target;
    let newState = {};
    newState[name] = value;
    this.setState(Object.assign({}, this.state, newState));
  }
  handleAddItemClick = () => {
    this.setState(Object.assign({}, this.state, this.state.newTask));
  };
  render() {
    return (
      <div>
        <h1>My Todo-list</h1>
        <input
          id="newTask"
          name="newTask"
          placeholder="Add your taks..."
          value={this.state.newTask}
          onChange={this.onInputChange.bind(this)}
        />
        <button onClick={this.handleAddItemClick.bind(this)}>Add</button>
        <ul id="taskList">{this.state.task}</ul>
      </div>
    );
  }
}
export default TODO;
