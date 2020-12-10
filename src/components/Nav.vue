<template>
  <div class="nav">
    <router-link
      to="/label"
      class="nav-item"
      @click="onNavItemClick"
      :class="{ active: navSelected }"
    >
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-label-selected"></use>
      </svg>
      <span>
        label
      </span>
    </router-link>

    <router-link to="/money" class="nav-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-label-selected"></use>
      </svg>
      <span>
        money
      </span>
    </router-link>
    <router-link to="/statistics" class="nav-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-label-selected"></use>
      </svg>
      <span>
        statistics
      </span>
    </router-link>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {},
  data() {
    return {
      navSelected: true,
    };
  },
  methods: {
    onNavItemClick() {
      console.log("click");
    },
  },
})
export default class Nav extends Vue {}
</script>
<style lang="scss" scoped>
.nav {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  .nav-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.active {
      background: orange;
    }
  }
}
</style>
