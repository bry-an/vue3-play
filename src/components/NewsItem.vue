<template>
  <div>
    <p class="news-item-title">
      <a target="_blank" :href="item.url">{{item.title}}</a>
      <span class="domain">({{item.domain}})</span>
    </p>

    <p class="news-item-details">
      {{ item.points }} points by {{item.user}} {{item.time_ago}} |
      <router-link
        :to="{ 
              name: 'news-item',
              params: {
                id: item.id
              }
            }"
      >{{item.comments_count}} comment{{item.comments_count !== 1 ? 's' : ""}}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "NewsItem",
  props: ["item"]
};
</script>

<style>
.news-item-title::before {
  counter-increment: news;
  content: counter(news) ". ";
  font-size: 0.85rem;
  color: #828282;
  font-size: 0.85rem;
}
.news-item-title a {
  font-size: 0.85rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
}
.news-item-details {
  margin-left: 2em;
  font-size: 0.8rem;
  color: #828282;
}

.domain {
  color: #828282;
}

.domain::before {
  content: " ";
}
</style>