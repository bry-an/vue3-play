<template>
  <div class="nav-bar">
    <p>Hack0r News</p>
    <div>
      <router-link to="/news">News</router-link>
      <router-link to="/newest">Newest</router-link>
      <router-link to="/show">Show</router-link>
      <router-link to="/ask">Ask</router-link>
      <router-link to="/jobs">Jobs</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.nav-bar {
  display: flex;
  background-color: rgb(255, 102, 0);
  justify-content: space-around;
  align-items: center;
}
.nav-bar p {
  font-size: 1.5em;
  font-weight: bold;
}

.nav-bar a {
  margin: 10px;
  text-decoration: none;
  color: black;
  width: 60px;
  text-align: center;
}

.nav-bar a::after {
  content: "|";
  margin-left: 10px;
}
</style>