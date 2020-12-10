<template>
  <div class="nav">
    <router-link to="/label">label</router-link> |
    <router-link to="/money">money</router-link> |
    <router-link to="/statistics">statistics</router-link>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {},
})
export default class Nav extends Vue {}
</script>
<style lang="scss" scoped>
.nav {
    border-top: 1px solid rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-around;
}
</style>
