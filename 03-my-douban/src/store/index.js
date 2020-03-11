import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cities: ['北京', '上海', '深圳', '广州', '武汉', '杭州', '成都'],
    wantList: {},
    watchedList: {},
    transitionName: 'right'
  },
  mutations: {
    ADD_WANT_LIST (state, info) {
      state.wantList[info.id] = info
    },
    ADD_WATCHED_LIST (state, info) {
      state.watchedList[info.id] = info
    },
    LEFT_TRANSITION (state) {
      state.transitionName = 'left'
    },
    RIGHT_TRANSITION (state) {
      state.transitionName = 'right'
    }
  }
})
