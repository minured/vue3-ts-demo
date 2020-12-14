<template>
  <div class="layout">
    <div class="content">
      <slot />
    </div>
    <div class="nav-wrapper">
      <Nav />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Nav from "@/components/Nav.vue";

@Options({
  components: {
    Nav,
  },
})
export default class Layout extends Vue {}
</script>
<style lang="scss">
.layout {
  height: 100vh;
  background: gray;
  overflow: auto;
  display: flex;
  flex-direction: column;
  .content {
    overflow: auto;
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
  }
  .nav-wrapper {
  }
}
</style>
