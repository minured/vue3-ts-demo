<template>
  <div class="home">
    <hello-world msg="red"/>
    <Demo />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Demo from "@/components/Demo.vue";

@Options({
  components: {
    HelloWorld,
    Demo,
  },
})
export default class Home extends Vue {}
</script>
