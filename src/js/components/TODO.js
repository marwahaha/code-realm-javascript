import Component from '../lib/component.js';
import store from '../store/index.js';
export default class Todo extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('.js-items')
        });
    }
    render() {
        
        if (store.state.todos.length === 0) {
            this.element.innerHTML = `<p class="no-items">You have no tasks yet </p>`;
            return;
        }
        this.element.innerHTML = `
      <ul class="app__items">
        ${store.state.todos.map(todo => {
            return `
            <li>${todo.title}<button id="delete" aria-label="Delete this item">×</button> <button id="completed" aria-label="Delete this item">Mark Complete</button></li>
          `
        }).join('')}
      </ul>
    `;
        const deleteBtn = this.element.querySelectorAll('#delete').forEach((button, index) => {
                button.addEventListener('click', () => {
                    store.dispatch('clearItem', { index });
                });
            });
        
        const completeBtn = this.element.querySelectorAll('#completed').forEach((button, index) => {
                button.addEventListener('click', () => {
                    store.dispatch('statusChange', { index });
                });
            });
        
        
    }
};