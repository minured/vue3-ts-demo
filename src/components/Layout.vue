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

@Options({})
export default class Layout extends Vue {}
</script>
<style lang="scss" scoped>
.layout {
  height: 100vh;
  background: gray;
  overflow: auto;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    overflow: auto;
  }
  .nav-wrapper {
    background: orange;
  }
}
</style>
