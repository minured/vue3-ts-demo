<template>
  <div>
    Money
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
  components: {
    // Nav,
  },
})
export default class Money extends Vue {}
</script>
<style lang="scss"></style>
