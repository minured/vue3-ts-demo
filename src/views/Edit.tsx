import { defineComponent, onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Field, Button, NavBar } from "vant";

export default defineComponent({
  name: "Edit",
  components: { Field, Button, NavBar },

  setup() {
    const route = useRoute();
    const router = useRouter();
    // tsx中渲染ref，要手动.value
    const labelName = ref("");
    labelName.value = route.params.labelName as string;
    const onConfirm = () => {
      console.log("confirm");
    };
    const onClickLeft = () => {
      console.log("click-left");
      router.push("/label");
    };

    return () => (
      <>
        <NavBar title="edit label" left-text="返回" onClickLeft={onClickLeft} />
        <Field v-model={labelName.value} label="Rename" />
        <Button type="primary" onClick={onConfirm}>
          确定
        </Button>
      </>
    );
  },
});
