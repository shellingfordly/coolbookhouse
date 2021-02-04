<template>
  <div class="home">
    <div class="header">
      <el-row>
        <el-col :span="12">
          <el-button type="primary" size="small" @click="isShowModel = true">
            添加
          </el-button>
        </el-col>
        <el-col :span="12" class="search">
          <el-input
            class="search-input"
            v-model="searchKey"
            placeholder="请输入搜索书名"
            @keyup.enter="doSsearch"
            size="small"
          />
          <el-button type="primary" size="small" @click="doSsearch">
            查询
          </el-button>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <p class="notes">
        未做严格检查，希望大家自觉填写可用的下载地址，勿让找书的好友空欢喜一场。
      </p>
      <home-table :tableData="tableData" />
    </div>
    <el-dialog
      title="添加书籍"
      v-model="isShowModel"
      width="500px"
      :before-close="() => (isShowModel = false)"
    >
      <home-form ref="formRef" @doAdd="doAdd" />
      <template #footer>
        <span class="dialog-footer">
          <el-button size="small" @click="isShowModel = false">取 消</el-button>
          <el-button type="primary" size="small" @click="doAdd">
            确 定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, defineComponent, reactive, toRefs, onMounted } from "vue";
import { ElMessage } from "element-plus";
import HomeForm from "./components/HomeForm.vue";
import HomeTable from "./components/HomeTable.vue";
import {getBookList, addBook, searchBook} from '/src/api'

export default defineComponent({
  name: "HelloWorld",
  components: { HomeForm, HomeTable },
  setup() {
    const formRef = ref(null);
    const state = reactive({
      searchKey: '',
      isShowModel: false,
      tableData: [],
    })

    onMounted(setBookList)

    async function setBookList(){
      const {status, data} = await getBookList()
      if(status === 1000) {
        state.tableData = data
      }
    }

    async function doAdd() {
      const { res, data } = await formRef.value.validate();
      if (!res) return;
      const {status} = await addBook(data)
      if(status === 1000) {
        ElMessage.success("添加成功，感谢您的支持！");
        setBookList()
      } else {
        ElMessage.warning("添加失败，请重新尝试！");
      }
      state.isShowModel = false;
      formRef.value.resetFormData();
    }

    async function doSsearch() {
      const {status, data} = await searchBook({name: state.searchKey})
      if(status === 1000) {
        state.tableData = data
      }
    }

    return { ...toRefs(state), formRef, doAdd, doSsearch };
  },
});
</script>

<style lang="scss" scoped>
@import "../../style/color";

.home {
  width: 80%;
  margin: auto;

  .header {
    padding: 20px 0;
    border-bottom: 1px solid $base-border-color;

    .search {
      display: flex;

      .search-input {
        margin-right: 15px;
      }
    }
  }
  .content {
    padding-top: 20px;

    .notes {
      color: $base-font-color;
      margin-bottom: 10px;
    }
  }
}
</style>
