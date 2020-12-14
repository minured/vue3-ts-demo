<template>
  <div>
    <Layout>
      <h1>record</h1>
      {{ JSON.stringify(recordList) }}
      <h1>label</h1>
      {{ JSON.stringify(labelList) }}
      <Edit />
    </Layout>
  </div>
</template> 
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Edit from "@/views/Edit.tsx"

@Options({
  props: {},
  components: {
    Edit
  },
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
