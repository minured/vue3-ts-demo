<template>
  <div>
    <Layout>
      <h1>edit label</h1>
      <List>
        <Cell
          v-for="item in labelList"
          :key="item"
          :title="item"
          @click="onLabelClick"
        />
      </List>
      <add-btn @addClick="onAddClick" />
      <!-- 弹出层 -->
      <Popup v-model:show="editPadVisible" class="popup-wrapper">
        <Field
          v-model="labelValue"
          class="vant-field"
          placeholder="输入标签名"
        />
        <Button @click="onEditValueConfirm" type="primary">确定</Button>
      </Popup>
    </Layout>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { List, Cell } from "vant";
import AddBtn from "@/components/AddBtn.vue";
import { Popup, Field, Button, Toast } from "vant";
import { useRouter } from "vue-router";

@Options({
  props: {},
  components: {
    List,
    Cell,
    AddBtn,
    Popup,
    Field,
    Button,
  },
})
export default class Label extends Vue {
  router = useRouter();
  labelList: string[] = ["A", "B", "C"];
  labelValue = "";
  editPadVisible = false;
  operationType = "";
  initLabel() {
    const localLabel = JSON.parse(localStorage.getItem("label") as "") || [];
    if (localLabel.length === 0) {
      console.log("default label");
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
      console.log(this.labelList);
      return;
    }
    console.log("get label from local");
    this.labelList = localLabel;
  }
  onLabelClick(e: any) {
    this.labelValue = e.target.innerText;

    console.log(this.router);

    this.router.push(`/edit/${e.target.innerText}`);
  }
  saveLabel() {
    localStorage.setItem("label", JSON.stringify(this.labelList));
  }
  onAddClick() {
    console.log("addClick");
    this.operationType = "ADD";
    this.editPadVisible = true;
  }
  beforeMount() {
    this.initLabel();
  }
  onEditValueConfirm() {
    if (!this.checkInputLabel(this.labelValue)) return;
    for (let i = 0; i < this.labelList.length; i++) {
      if (this.labelValue === this.labelList[i]) {
        this.editPadVisible = false;
        return;
      }
    }
    this.labelList.push(this.labelValue);
    this.saveLabel();
    this.editPadVisible = false;
  }
  checkInputLabel(v: string) {
    if (v === "") {
      Toast.fail("不能为空");
      return false;
    }
    return true;
  }
}
</script>
<style lang="scss" scoped>
:deep .add {
  position: fixed;
  right: 5px;
  bottom: 55px;
}
:deep .popup-wrapper {
  border-radius: 10px;
  width: 80vw;
  padding: 50px 20px 15px 20px;
  .vant-field {
    margin-bottom: 20px;
  }
}
</style>
