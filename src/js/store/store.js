import TodoLib from '../lib/lib.js';

export default class Store {
    constructor(params) {
        let self = this;
        self.actions = {};
        self.mutations = {};
        self.state = {};
        self.status = 'default state';
        self.events = new TodoLib();
        if (params.hasOwnProperty('actions')) {
            self.actions = params.actions;
        }
        if (params.hasOwnProperty('mutations')) {
            self.mutations = params.mutations;
        }
        //Use proxy to watch state object
        self.state = new Proxy((params.state || {}), {
            set: function (state, key, value) {
                state[key] = value;
                self.events.publish('stateChange', self.state);
                self.status = 'resting';
                return true;
            }
        });
    }
    dispatch(actionKey, payload) {
        let self = this;
        self.status = 'action';
        self.actions[actionKey](self, payload);
        return true;
    }
    commit(mutationKey, payload) {
        let self = this;
        if (typeof self.mutations[mutationKey] !== 'function') {
            console.log(`Mutation "${mutationKey}" doesn't exist`);
            return false;
        }
        self.status = 'mutation';
        let newState = self.mutations[mutationKey](self.state, payload);
        self.state = Object.assign(self.state, newState);
        return true;
    }   
}