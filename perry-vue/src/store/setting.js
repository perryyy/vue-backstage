import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

//重點  這裡不用new Vuex.Store
export default({
   namespaced: true,
  // 類似data
  state: {
    isCollapse:false,
    itemVisible:true
  },
  //對state做改變
  mutations: {
    ChangeisCollapse(state){
        state.isCollapse = !state.isCollapse;
    },
    CollapseisTrue(state){
      state.isCollapse = true;
    },
    CollapseisFalse(state){
      state.isCollapse = false;
    },
    VisibleisTrue(state){
      state.itemVisible = true;
    },
    VisibleisFalse(state){
      state.itemVisible = false;
    }
  },
  //vue呼叫這裡的方法去觸發mutations
  actions: {  
    changeisCollapse(context){
        context.commit('ChangeisCollapse')   
    },
    collapseisTrue(context){
        context.commit('CollapseisTrue')   
    },
    collapseisFalse(context){
        context.commit('CollapseisFalse')   
    },
    visibleisTrue(context){
        context.commit('VisibleisTrue')   
    },
    visibleisFalse(context){
        context.commit('VisibleisFalse')   
    }
  },
  //模組化
  modules: {

  },
  //在vue取得state資料前，可以在這邊處理，運用在多個地方需要用到相同的結果
  getters:{

  }
})
