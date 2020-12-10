<template>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Nav from "@/components/Nav.vue";
import "./assets/icons/iconfont.js";
import "./assets/styles/reset.scss";
import "./assets/styles/global.scss";

@Options({
  components: {
    Nav,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/assets/styles/reset.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
