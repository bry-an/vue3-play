<template>
  <div class="current-news-item">
    <div v-if="loading">Loading...</div>
    <div v-if="!loading">
      <news-item :item="currentNewsItem" />
    </div>
  </div>
</template>

<script>
import { onCreated } from "vue-function-api";
import { useState, useActions, useRouter } from "@u3u/vue-hooks";

import types from "../types";
import NewsItem from "../components/NewsItem";

export default {
  components: {
    NewsItem
  },
  setup() {
    const { loading, currentNewsItem } = useState([
      "loading",
      "currentNewsItem"
    ]);
    const { route } = useRouter();

    const { GET_NEWS_ITEM } = useActions([types.GET_NEWS_ITEM]);
    onCreated(() => {
      GET_NEWS_ITEM(route.value.params.id);
    });

    return {
      loading,
      currentNewsItem
    };
  }
};
</script>

<style scoped>
.current-news-item {
  padding: 1em;
}
.news-item-title::before {
  content: none;
}
</style>