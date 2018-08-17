const state = {
    userInfo: {
    },

    //使用场景：我的页面，顶部cell信息。 由于这块的显示逻辑与通用的userInfo接口有冲突，所以单独使用接口处理此处逻辑
    myselfOverview: {

    }

}

/**
 * 关于mutations
 * 不能重定义state
 * 务必使用Object.assign({}, old, new)重新定义对象，不然不触发更新
 */
const mutations = {
    updateUserInfo (state, userInfo) {
      state.userInfo = Object.assign({}, state.userInfo, userInfo);
    },
    updateMyselfOverview(state, overview){
        state.myselfOverview = Object.assign({}, state.myselfOverview, overview);
    }
}

export default {
    state,
    mutations
}