<template>
  <div>
    <Layout>
      Statistics
    </Layout>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Layout from "@/components/Layout.vue";

@Options({
  props: {},
  components: {
    Layout,
  },
})
export default class Statistics extends Vue {}
</script>
<style lang="scss" scoped></style>
