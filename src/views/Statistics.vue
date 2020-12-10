<template>
  <div>
    Statistics
  </div>
  <div>
    <Nav />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import Nav from "@/components/Nav.vue";

@Options({
  props: {},
//   components: { Nav },
})
export default class Statistics extends Vue {}
</script>
<style lang="">
</style>
