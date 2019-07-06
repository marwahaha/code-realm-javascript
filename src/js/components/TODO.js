// Code for the TODO app goes here.

import React, { Component } from 'react'

export default class TODO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        console.log("submit");
        e.preventDefault();
        const todo = {
            title: this.state.title
        }

        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(res => res.json())
            .then(data => console.log(data));

    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then()
            .then(data => this.setState({ todos: data }));
    }

    render() {

        const todoItems = this.state.todos.map(todo => (
            <div key={todo.id}>
                <p>{todo.title} &nbsp; <button>Edit</button> &nbsp; <button>Delete</button>
                </p>
            </div>
        ));

        return (
            <div>
                <div>
                    <input type="text" name="title" onChange={this.onChange} />
                    <button onSubmit={this.onSubmit}>ADD</button>
                </div>
                {todoItems}
            </div>
        )
    }
}
