<template>
  <el-table :data="tableData" style="width: 100%" size="small">
    <el-table-column prop="name" label="书名" />
    <el-table-column label="下载地址" width="120px">
      <template #default="scope">
        <a  class="book-link" :href="scope.row.link" target="brank">
          <i class="el-icon-link"></i>下载链接
        </a>
      </template>
    </el-table-column>
    <el-table-column prop="uppsw" label="提取码" width="120px" />
    <el-table-column prop="gzpsw" label="解压密码" width="120px" />
    <el-table-column prop="user" label="提供者" width="120px" />
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

<style lang="scss" scoped>
@import '../../../style/color';
.book-link {
  color: $link-font-color;
}
</style>