import store from './store/index.js';
import Todo from './components/TODO.js';
const formElement = document.querySelector('.js-form');
const inputElement = document.querySelector('#new-item-field');
formElement.addEventListener('submit', evt => {
    evt.preventDefault();
    let value = {
        title: inputElement.value.trim(),
        completed: false
    }
    store.dispatch('addItem', value);
    inputElement.value = '';
    inputElement.focus();
    
});
const listInstance = new Todo();
listInstance.render();
