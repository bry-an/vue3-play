<template>
  <div class="home">
    <div v-if="loading">Loading</div>
    <div>
      <news-item v-for="item in newsItems" :key="item.id" :item="item" />
      <div>
        <p class="more" @click="loadMore">more</p>
      </div>
    </div>
  </div>
</template>

<script>
import { value, onCreated } from "vue-function-api";
import { useState, useActions } from "@u3u/vue-hooks";
import NewsItem from "../components/NewsItem";
const baseUrl = "https://api.hackernews.io";
import types from "../types";

export default {
  components: {
    NewsItem
  },
  setup() {
    const { loading, newsItems } = useState(["loading", "newsItems"]);

    const { GET_NEWS_ITEMS } = useActions([types.GET_NEWS_ITEMS]);

    const currentPage = value(1);
    onCreated(() => {
      GET_NEWS_ITEMS({
        type: "news",
        page: currentPage.value
      });
    });

    const loadMore = () => {
      currentPage.value++;
      console.log("cpv", currentPage.value);
      GET_NEWS_ITEMS({
        type: "news",
        page: currentPage.value
      });
    };

    return {
      loading,
      newsItems,
      loadMore
    };
  }
};
</script>


<style scoped>
.home {
  counter-reset: news;
  background-color: #f6f6ef;
  padding: 1em;
}

.more {
  color: #828282;
  font-size: 0.8rem;
}
</style>
