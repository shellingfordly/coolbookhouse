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
      <el-input v-model="formData.link" placeholder="请填写正确的链接" @keyup.enter="$emit('doAdd')" />
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
import { defineComponent, reactive, ref, toRefs } from "vue";

function linkValidate(_, value) {
  const reg = /[http|https]:\/\/.+\..+/;
  return reg.test(value);
}

const rules = {
  name: [{ required: true, message: "请填写准确的书名", trigger: "blur" }],
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
    name: "",
    link: "",
    uppsw: "",
    gzpsw: "",
    user: "",
  };
}

export default defineComponent({
  setup() {
    const state = reactive({ formData: getFormData() });
    const formRef = ref(null);

    function validate() {
      return new Promise((reslove) => {
        formRef.value.validate((res) => {
          reslove({ res, data: state.formData });
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
