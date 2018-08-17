const state = {
    list: [],
    curMemberInfo: {
        name: '',
        phone: '',
        role: 'common',
        permissions: {

        },
    },
    addMemberInfo: {
        name: "",
        phone: "",
        role: "common",
        permissions: {}
    }
};
const mutations = {
    updateTeamList(state, teamList) {
        state.list = teamList;
    },
    updateTeamMember(state, memberInfo) {
        state.list = state.list.map(item => {
            if ((item.id === memberInfo.id)) {
                return memberInfo;
            } else {
                return item;
            }
        });
    },
    //成员列表list vue 获取当前成员的全部信息
    updateCurMemberInfo(state, curMemberInfo) {
        console.log("jsfile  " + curMemberInfo.name);
        state.curMemberInfo = curMemberInfo;
    },
    //修改手机号码页面 更改当前用户的字段 field
    updateCurMemberFeild(state, { field, value }) {
        state.curMemberInfo[field] = value;
    },

    updateAddMemberInfo(state, { field, value }) {
        state.addMemberInfo[field] = value;
    },
    resetAddMemberInfo(state, curMemberInfo={}){
        state.addMemberInfo = {
            name: '',
            phone: '',
            role: 'common',
            permissions: {
    
            },
        }
    }
};

export default {
    state,
    mutations
};
