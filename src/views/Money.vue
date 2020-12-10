<template>
  <div class="money">
    <div class="money-content">
      Money
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>456</div>
      <div>last</div>
    </div>
    <div class="nav-wrapper">
      <Nav />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
  components: {},
})
export default class Money extends Vue {}
</script>
<style lang="scss" scoped>
.money {
  height: 100vh;
  background: gray;
  overflow: auto;
  display: flex;
  flex-direction: column;
  .money-content {
      flex: 1;
      overflow: auto;
  }
  .nav-wrapper {

  }
}
</style>
