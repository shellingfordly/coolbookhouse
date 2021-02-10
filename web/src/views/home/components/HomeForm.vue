<template>
  <el-form
    class="home-form"
    label-position="right"
    label-width="90px"
    :rules="rules"
    :model="formData"
    ref="formRef"
  >
    <el-form-item label="书名" prop="name">
      <el-input v-model="formData.name" placeholder="请填写准确的书名" />
    </el-form-item>
    <el-form-item label="链接地址" prop="link">
      <el-input
        v-model="formData.link"
        placeholder="请填写正确的链接"
        @keyup.enter="$emit('doAdd')"
      />
    </el-form-item>

    <el-form-item label="格式" prop="format">
      <el-radio-group v-model="formData.format">
        <el-radio label="mobi">mobi</el-radio>
        <el-radio label="epub">epub</el-radio>
        <el-radio label="pdf">pdf</el-radio>
        <el-radio label="txt">txt</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="提取码">
      <el-input v-model="formData.uppsw" placeholder="可不填" />
    </el-form-item>
    <el-form-item label="解压密码">
      <el-input v-model="formData.gzpsw" placeholder="可不填" />
    </el-form-item>
    <el-form-item label="贡献者">
      <el-input v-model="formData.user" placeholder="可不填" />
    </el-form-item>
  </el-form>
</template>

<script>
import { defineComponent, reactive, ref, toRaw, toRefs, watch } from "vue";
import { useObj1KeyCopyObj2Val, objCopy } from "/src/utils/object";

function linkValidate(_, value) {
  const reg = /[http|https]:\/\/.+\..+/;
  return reg.test(value);
}

const rules = {
  name: [{ required: true, message: "请填写准确的书名", trigger: "blur" }],
  format: [{ required: true, message: "请选择正确的格式", trigger: "change" }],
  link: [
    {
      required: true,
      message: "请填写正确的链接",
      validator: linkValidate,
      trigger: "blur",
    },
  ],
};

function getFormData() {
  return {
    _id: "",
    name: "",
    link: "",
    uppsw: "",
    gzpsw: "",
    user: "",
    format: "",
  };
}

export default defineComponent({
  props: {
    formData: { type: Object },
    isUpdate: { type: Boolean, default: false },
  },
  setup(props) {
    const state = reactive({ formData: getFormData() });
    const formRef = ref(null);

    watch(
      () => props.formData,
      (newFormData) => {
        if (props.isUpdate) {
          state.formData = useObj1KeyCopyObj2Val(
            toRaw(state.formData),
            toRaw(newFormData)
          );
        } else state.formData = getFormData();
      },
      { deep: true, immediate: true }
    );

    function validate() {
      return new Promise((reslove) => {
        const data = objCopy(state.formData)
        Reflect.deleteProperty(data, '_id')
        formRef.value.validate((res) => {
          reslove({ res, data });
        });
      });
    }

    function resetFormData() {
      state.formData = getFormData();
    }

    return {
      ...toRefs(state),
      formRef,
      validate,
      rules,
      resetFormData,
    };
  },
});
</script>

<style lang="scss" scoped>
.home-form {
  padding: 0 20px;
}
</style>
