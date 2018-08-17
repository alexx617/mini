const state = {
    list: [],
    brandinfo: {
        school_short_name: '',
        school_name: '',
        desc: '',
    },
    schoolInfo:''
};
const mutations = {
    updateBrandInfo(state, { field, value }) {
        state.brandinfo[field] = value;
    },
    setBrandInfo(state,value) {
        state.brandinfo = value;
    },
    setSchoolInfo(state,value){
        state.schoolInfo = value;
    }
};

export default {
    state,
    mutations
};
