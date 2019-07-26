<template>
  <div class="home">
    <div v-if="loading">Loading</div>
    <div>
      <news-item v-for="item in items" :key="item.id" />
    </div>
  </div>
</template>

<script>
import { value, onCreated } from "vue-function-api";
import NewsItem from "../components/NewsItems";

const baseUrl = "https://api.hackernews.io";

export default {
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
  background-color: #f6f6ef;
}
</style>
