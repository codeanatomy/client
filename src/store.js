import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    allQuestions: [],
    showParent: true,
    answerAdd: false,
  },
  mutations: {
    updateLoginState(state, payload) {
      state.isLogin = payload.boolean;
    },
  },
  actions: {
    
  },
});
