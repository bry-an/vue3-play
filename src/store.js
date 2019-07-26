import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import types from "./types";

export default new Vuex.Store({
  state: {
    newsItems: [],
    currentNewsItem: {},
    loading: false,
  },
  mutations: {
    [types.SET_NEWS_ITEMS](state, payload) {
      state.newsItems = payload;
    },
    [types.SET_CURRENT_NEWS_ITEM](state, payload) {
      state.currentNewsItem = payload;
    },
    [types.SET_LOADING](state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    async [types.GET_NEWS_ITEMS]({ commit }, { type, page = 1 }) {
      commit(types.SET_LOADING, true)

      const baseUrl = "https://api.hackernews.io";
      const response = await fetch(baseUrl + `${baseUrl}/${type}?page=${page}`);
      const json = await response.json();

      commit(types.SET_NEWS_ITEMS, json)
      commit(types.SET_LOADING, false)
    }


  }
});
