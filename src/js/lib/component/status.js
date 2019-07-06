import Component from '../lib/component.js';
import store from '../store/index.js';
export default class Status extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('.js-status')
        });
    }
}