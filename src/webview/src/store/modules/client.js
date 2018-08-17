const state = {
    overView: {
        //待分配
        distributing_num: 0,
        //已报名
        signed_num: 0,
        //已分配
        distributed_num: 0,
        //本周数据
        cur_week: {
            distributed_num: "--",
            tracked_num: "--",
            visited_num: "--",
            signed_num: "--"
        }
    },
    
    //分配中的线索
    distributingClue: {
        config: {
            //分配的请求地址
            url: ''
        },
        //已选的新线索
        selectedNewClueList: [],
        //已选的回收线索
        selectedRecycleClueList: [],
        //成员选择页用
        selectedClueIdList: []
    },
    
    config: {
        //线索自动回收时间
        clueAutoRecyclePeriod: 0
    }
}

const mutations = {
    updateOverView (state, data) {
      state.overView = Object.assign({}, state.overView, data);
    },
    updateDistributingClue(state, data){
        state.distributingClue = Object.assign(state.distributingClue, data);
    },
    
    updateSelectedClueIdList(state, data ){
        state.distributingClue.selectedClueIdList = data;
    },
    
    updateClueAutoRecyclePeriod(state, period){
        state.config.clueAutoRecyclePeriod = period;
    }
}

export default {
    state,
    mutations
}
