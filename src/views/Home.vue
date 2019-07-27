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
import { value, onCreated, watch } from "vue-function-api";
import { useState, useActions, useRouter } from "@u3u/vue-hooks";
import NewsItem from "../components/NewsItem";
const baseUrl = "https://api.hackernews.io";
import types from "../types";

export default {
  components: {
    NewsItem
  },
  setup() {
    const { route } = useRouter();
    const { loading, newsItems } = useState(["loading", "newsItems"]);

    const { GET_NEWS_ITEMS } = useActions([types.GET_NEWS_ITEMS]);

    const updateType = type => {
      currentPage.value = 1;
      GET_NEWS_ITEMS({
        type,
        page: currentPage.value
      });
    };
    watch(
      () => route.value.params.type,
      type => {
        updateType(type);
      }
    );

    const currentPage = value(1);
    onCreated(() => {
      updateType(route.value.params.type);
    });

    const loadMore = () => {
      currentPage.value++;
      console.log("cpv", currentPage.value);
      GET_NEWS_ITEMS({
        type: route.value.params.type,
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
