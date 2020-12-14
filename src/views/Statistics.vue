<template>
  <div>
    <Layout>
      <h1>record</h1>
      {{ JSON.stringify(recordList) }}
      <h1>label</h1>
      {{ JSON.stringify(labelList) }}
    </Layout>
  </div>
</template> 
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
  components: {},
})
export default class Statistics extends Vue {
  recordList = [];
  labelList = [];
  beforeMount() {
    this.recordList = JSON.parse(localStorage.getItem("record") as "") || [];
    this.labelList = JSON.parse(localStorage.getItem("label") as "") || [];
  }
}
</script>
<style lang="scss" scoped></style>
