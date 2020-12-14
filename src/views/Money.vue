<template>
  <div class="money">
    <!-- 作为插槽放进去的时候，要考虑内部的类 -->
    <Layout>
      <div class="in-out">
        <Tabs v-model:active="record.type">
          <Tab title="支出"></Tab>
          <Tab title="收入"></Tab>
        </Tabs>
      </div>
      <div class="amount">
        <span>{{ record.amount }}</span>
      </div>
      <div class="label">
        <RadioGroup v-model="record.label">
          <Radio :name="item" v-for="item in labelList" :key="item">
            {{ item }}
          </Radio>
        </RadioGroup>
      </div>
      <div class="numberPad">
        <NumberKeyboard
          :show="true"
          theme="custom"
          extra-key="."
          close-button-text="确定"
          @close="onConfirm"
          @input="onInput"
          @delete="onDelete"
          :safe-area-inset-bottom="false"
          :hide-on-click-outside="false"
        />
      </div>
    </Layout>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NumberKeyboard, Cell, Tab, Tabs } from "vant";
import { RadioGroup, Radio } from "vant";

@Options({
  props: {},
  components: {
    NumberKeyboard,
    Cell,
    Tab,
    Tabs,
    Radio,
    RadioGroup,
  },

  // TODO if优化，小数点判断
  methods: {
    onInput(value: string) {
      let { amount } = this.record;
      if (amount === "0") {
        amount = value;
      } else {
        amount = amount + value.toString();
      }
      this.record.amount = amount;
    },
    onDelete() {
      let { amount } = this.record;
      if (amount.length === 1) {
        amount = "0";
      } else {
        amount = amount.slice(0, amount.length - 1);
      }
      this.record.amount = amount;
    },
    onConfirm() {
      console.log("confirm");
      console.log(this.record);
      this.recordList = JSON.parse(localStorage.getItem("record") as "") || [];
      this.recordList.push(this.record);
      localStorage.setItem("record", JSON.stringify(this.recordList));
      // 恢复
      this.record.amount = "0";
      this.record.type = "0";
      this.record.label = "早餐";
    },
  },
})
export default class Money extends Vue {
  show = false;
  recordList = [];
  record = { type: 0, amount: "0", label: "午饭" };
  labelList: string[] = [];
  saveLabel(label: string[]) {
    localStorage.setItem("label", JSON.stringify(label));
  }

  initLabel() {
    const localLabel = JSON.parse(localStorage.getItem("label") as "") || [];
    if (localLabel.length === 0) {
      // init default label here
      console.log("initDefaultLabel");
      const defaultLabel = [
        "早餐",
        "晚饭",
        "午饭",
        "公交",
        "零食",
        "衣服",
        "房租",
        "水果",
        "买菜",
        "下午茶",
        "打车",
      ];
      this.labelList = defaultLabel;
      this.saveLabel(this.labelList);
      return;
    }
    console.log("get lable from localStorage");
    this.labelList = localLabel;
  }
  beforeMount() {
    this.initLabel();
  }
}
</script>
<style lang="scss" scoped>
:deep .content {
  background: orange;
  .in-out {
  }
  .amount {
    span {
      font-size: 50px;
    }
  }
  .numberPad {
    .van-number-keyboard {
      bottom: calc(50px);
    }
  }
}
</style>
