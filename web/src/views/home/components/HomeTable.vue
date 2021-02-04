<template>
  <el-table :data="list" style="width: 100%" size="small">
    <el-table-column prop="name" label="书名" width="180" />
    <el-table-column prop="link" label="下载地址" />
    <el-table-column prop="uppsw" label="提取码" />
    <el-table-column prop="gzpsw" label="解压密码" />
    <el-table-column prop="user" label="提供者" />
  </el-table>
</template>
<script>
import { defineComponent, onMounted } from "vue";
import {getBookList} from '/src/api'

export default defineComponent({
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  setup(props) {
    console.log(props.list);
    onMounted(async ()=>{
      const res = await getBookList()
    })
    
    return {};
  },
});
</script>
