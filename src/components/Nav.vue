<template>
  <div class="nav">
    <Tabbar v-model="tabSelected" @change="onTabChange">
      <TabbarItem icon="label">标签</TabbarItem>
      <TabbarItem icon="add">记账</TabbarItem>
      <TabbarItem icon="balance-list">统计</TabbarItem>
    </Tabbar>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Tabbar, TabbarItem } from "vant";
import { Tab, Tabs } from "vant";
import { useRouter, useRoute } from "vue-router";

@Options({
  props: {},
  components: {
    Tabbar,
    TabbarItem,
    Tab,
    Tabs,
  },
})
export default class Nav extends Vue {
  tabSelected = 0;
  router = useRouter();
  route = useRoute();
  // 路径判断优化 TODO
  beforeMount() {
    const { path } = this.route;
    switch (path) {
      case "/label":
        this.tabSelected = 0;
        break;
      case "/money":
        this.tabSelected = 1;
        break;
      case "/statistics":
        this.tabSelected = 2;
        break;
    }
  }
  onTabChange() {
    switch (this.tabSelected) {
      case 0:
        this.router.push("/label");
        break;
      case 1:
        this.router.push("/money");
        break;
      case 2:
        this.router.push("/statistics");
        break;
    }
  }
}
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
