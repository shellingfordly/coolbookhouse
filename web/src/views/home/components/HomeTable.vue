<template>
  <el-table :data="tableData" style="width: 100%" size="small">
    <el-table-column prop="name" label="书名" width="180" />
    <el-table-column prop="link" label="下载地址" />
    <el-table-column prop="uppsw" label="提取码" />
    <el-table-column prop="gzpsw" label="解压密码" />
    <el-table-column prop="user" label="提供者" />
  </el-table>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    tableData: {
      type: Array,
      default: [],
    },
  },
  setup() {
   
    return {};
  },
});
</script>
