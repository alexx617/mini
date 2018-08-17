const state = {
    common: {
        config: {},
        value: ''
    },
    permission: {
        config: {},
        value: {}
    },
    list: {
        config: {},
        value: ''
    }
}

const mutations = {
    commonEditConfigChange(state, config) {
        state.common.config = config;
    },
    commonEditValueChange(state, value){
        state.common.value = value;
    },
    permissionEditConfigChange(state, config) {
        state.permission.config = config;
    },
    permissionEditValueChange(state, value){
        state.permission.value = value;
    },
    listEditConfigChange(state, config) {
        state.list.config = config;
    },
    listEditValueChange(state, value){
        state.list.value = value;
    },
}

export default {
    state,
    mutations
}

