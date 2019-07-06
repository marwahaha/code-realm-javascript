export default {
    addItem(context, payload) {
        context.commit('addItem', payload);
    },
    clearItem(context, payload) {
        context.commit('clearItem', payload);
    },
    statusChange(context, payload) {
        context.commit('statusChange', payload);
    }
};