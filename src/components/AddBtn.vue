<template>
  <div class="add" @click="()=>{$emit('addClick')}">
    <span>+</span>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
    // vue3中的自定义事件需要在 emits 中记录，类似于props
    emits:["addClick"]
})
export default class AddBtn extends Vue {
    
}
</script>
<style lang="scss" scoped>
.add {
  width: 50px;
  height: 50px;
  text-align: center;
  background: orange;
  border-radius: 25px;
  span {
    font-size: 50px;
    line-height: 50px;
  }
}
</style>
