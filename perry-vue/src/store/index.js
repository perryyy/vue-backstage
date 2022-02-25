import Vue from 'vue'
import Vuex from 'vuex'
import CollapseModules from'./setting'
import MemberDataModules from'./memberData'
import getters from './getter'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    CollapseModules,
    MemberDataModules
  },
  getters
})
