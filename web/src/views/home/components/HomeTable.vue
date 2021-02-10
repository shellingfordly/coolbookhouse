<template>
  <el-table :data="tableData" style="width: 100%" size="small">
    <el-table-column prop="name" label="书名" />
    <el-table-column prop="format" label="格式" width="60px" />
    <el-table-column prop="uppsw" label="提取码" width="80px" />
    <el-table-column prop="gzpsw" label="解压密码" width="100px" />
    <el-table-column prop="user" label="提供者" width="200px" />
    <el-table-column label="操作" width="130px">
      <template #default="scope">
        <el-button type="text" size="medium" @click="goUrl(scope.row.link)">
          下载
        </el-button>
        <el-button
          type="text"
          size="medium"
          @click="$emit('onUpdate', scope.row)"
        >
          更新
        </el-button>
        <el-button
          v-if="isShowDelete(scope.row)"
          type="text"
          size="medium"
          @click="doDelete(scope.row)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { defineComponent } from "vue";
import { deleteBook } from "/src/api";
import { ElMessage } from "element-plus";

export default defineComponent({
  props: {
    tableData: {
      type: Array,
      default: [],
    },
  },
  setup(_, ctx) {
    function goUrl(url) {
      window.open(url);
    }

    function isShowDelete(row) {
      const nowTime = new Date().getTime();
      const time = nowTime - row.createTime;
      return time < 1000 * 60 * 10;
    }

    async function doDelete(row) {
      const { status } = await deleteBook({ _id: row._id });
      if (status === 1000) {
        ElMessage.success("删除成功！");
        ctx.emit("doDelete");
      }
    }

    return { goUrl, isShowDelete, doDelete };
  },
});
</script>

<style lang="scss" scoped>
@import "../../../style/color";
.book-link {
  color: $link-font-color;
}
</style>
