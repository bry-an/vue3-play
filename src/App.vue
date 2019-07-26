<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/Navbar";

export default {
  components: {
    NavBar
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");
body {
  font-family: "Montserrat";
}
</style>
