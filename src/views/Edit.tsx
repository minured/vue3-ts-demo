import { defineComponent, onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Field, Button, NavBar } from "vant";
import { Toast } from "vant";

export default defineComponent({
  name: "Edit",
  components: { Field, Button, NavBar },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const labelList = ref([""]);
    // tsx中渲染ref，要手动.value
    const labelName = ref(route.params.labelName);
    const originLabelName = route.params.labelName as string;

    const onConfirm = () => {
      console.log(originLabelName);
      if (labelName.value === "") {
        Toast.fail("不能为空");
        return;
        // 减少标签名相同时候的遍历
      } else if (originLabelName === labelName.value) {
        return;
      }
      const labelIndex = labelList.value.indexOf(originLabelName);

      labelList.value[labelIndex] = labelName.value as string;
      saveLabel();
      router.push("/label");
    };

    const saveLabel = () => {
      localStorage.setItem("label", JSON.stringify(labelList.value));
    };
    const initLabelList = () => {
      const localLabel = JSON.parse(localStorage.getItem("label") as "") || [];
      if (localLabel.length === 0) {
        // initDefaultLabel
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
        labelList.value = defaultLabel;
        saveLabel();
        return;
      }
      console.log("get label from localStorage");
      labelList.value = localLabel;
    };
    initLabelList();

    const onClickLeft = () => {
      console.log("click-left");
      router.push("/label");
    };
    const onDelete = () => {
      console.log("delete");
      const labelIndex = labelList.value.indexOf(originLabelName);
      labelList.value.splice(labelIndex, 1);
      console.log(labelList.value);
      saveLabel()
      router.push("/label")

      
    };

    return () => (
      <>
        <NavBar title="edit label" left-text="返回" onClickLeft={onClickLeft} />
        <Field v-model={labelName.value} label="Rename" />
        <Button
          type="primary"
          onClick={onConfirm}
          style="width: 60vw; margin-bottom: 10px"
        >
          确定
        </Button>
        <Button onClick={onDelete} style="width: 60vw">
          删除
        </Button>
      </>
    );
  },
});
