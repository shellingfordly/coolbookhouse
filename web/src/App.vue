<template>
  <div class="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import Header from "./views/Header.vue";
import Home from "./views/home/Home.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
  },
};
</script>
