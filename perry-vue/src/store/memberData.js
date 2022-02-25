import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

//重點  這裡不用new Vuex.Store
export default({
   namespaced: true,
  // 類似data
  state: {
    account:'',
  },
  //對state做改變
  mutations: {
    SetUsername(state,username){
      state.account=username;
    }
  },
  //vue呼叫這裡的方法去觸發mutations
  actions: {  
    setUsername(context,username){
      context.commit('SetUsername',username);
    }
  },
  //模組化
  modules: {

  },
  //在vue取得state資料前，可以在這邊處理，運用在多個地方需要用到相同的結果
  getters:{

  }
})
