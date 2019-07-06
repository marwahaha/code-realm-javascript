import store from './store/index.js';

import Count from './lib/component/count.js'
import List from './lib/component/list.js'
import Status from './lib/component/status.js'
const formElement = document.querySelector('.js-form');
const inputElement = document.querySelector('#new-item-field');

formElement.addEventListener('submit', evt => {

    console.log('checking 1 ');
    evt.preventDefault();
    let value = inputElement.value.trim();
    if (value.length) {
        store.dispatch('addItem', value);
        inputElement.value = '';
        inputElement.focus();
    }
});
const countInstance = new Count();
const listInstance = new List();
const statusInstance = new Status();
countInstance.render();
listInstance.render();
statusInstance.render();