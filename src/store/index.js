/**
 * Created by zhongchengyong on 2017/5/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  level: '第一周',
  //test
  score : 0,
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
