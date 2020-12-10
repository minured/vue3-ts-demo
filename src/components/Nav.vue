<template>
  <div>
    <router-link to="/money">money</router-link> |
    <router-link to="/label">label</router-link> |
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
<style lang=""></style>
