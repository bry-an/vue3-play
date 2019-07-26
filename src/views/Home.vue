<template>
  <div class="home">
    <div v-if="loading">Loading</div>
    <div>
      <news-item v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import { value, onCreated } from "vue-function-api";
import NewsItem from "../components/NewsItem";
const baseUrl = "https://api.hackernews.io";

export default {
  components: {
    NewsItem
  },
  setup() {
    const items = value([]);
    const loading = value(true);

    onCreated(async () => {
      const response = await fetch(baseUrl + "/news?page=1");
      const json = await response.json();
      items.value = json;
      loading.value = false;
    });

    return {
      items,
      loading
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
</style>
