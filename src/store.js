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
    },
    [types.APPEND_NEWS_ITEMS](state, payload) {
      console.log("append")
      const uniqueIds = {};
      state.newsItems = state.newsItems.concat(payload).filter(item => {
        if (!uniqueIds[item.id]) {
          uniqueIds[item.id] = true;
          return true;
        }
        return false;
      });
    }
  },
  actions: {
    async[types.GET_NEWS_ITEMS]({ commit }, { type, page = 1 }) {
      commit(types.SET_LOADING, true)

      const baseUrl = "https://api.hackernews.io";
      const response = await fetch(`${baseUrl}/${type}?page=${page}`);
      const items = await response.json();
      if (page === 1) {
        commit(types.SET_NEWS_ITEMS, items);
      } else {
        commit(types.APPEND_NEWS_ITEMS, items);
      }
      commit(types.SET_LOADING, false)
    }


  }
});
