<template>
  <div class="home">
    <div class="header">
      <el-row>
        <el-col :span="12">
          <el-button
            type="primary"
            size="small"
            @click="(isShowModel = true), (isUpdate = false)"
          >
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
      <home-table
        :tableData="tableData"
        @doDelete="setBookList"
        @onUpdate="onUpdate"
      />
    </div>
    <el-dialog
      :title="isUpdate ? '更新书籍' : '添加书籍'"
      v-model="isShowModel"
      width="500px"
      :before-close="() => (isShowModel = false)"
    >
      <home-form
        ref="formRef"
        :isUpdate="isUpdate"
        :formData="formData"
        @doAdd="doAdd"
      />
      <template #footer>
        <span class="dialog-footer">
          <el-button size="small" @click="isShowModel = false">取 消</el-button>
          <el-button type="primary" size="small" @click="doAction">
            {{ isUpdate ? "更新" : "添加" }}
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
import { getBookList, addBook, searchBook, updateBook } from "/@/api";

export default defineComponent({
  name: "HelloWorld",
  components: { HomeForm, HomeTable },
  setup() {
    const formRef = ref(null);
    const state = reactive({
      searchKey: "",
      isShowModel: false,
      isUpdate: false,
      tableData: [],
      formData: {},
    });

    onMounted(setBookList);

    async function setBookList() {
      const { status, data } = await getBookList();
      if (status === 1000) {
        state.tableData = data;
      }
    }

    function doAction() {
      if (state.isUpdate) doUpdate();
      else doAdd();
    }

    function onUpdate(row) {
      state.isUpdate = true;
      state.formData = row;
      state.isShowModel = true;
    }

    async function doAdd() {
      const { res, data } = await formRef.value.validate();
      if (!res) return;
      const { status } = await addBook(data);
      if (status === 1000) {
        ElMessage.success("添加成功，感谢您的支持！");
        setBookList();
      } else {
        ElMessage.warning("添加失败，请重新尝试！");
      }
      state.isShowModel = false;
      formRef.value.resetFormData();
    }

    async function doUpdate() {
      console.log(formRef.value.formData);
      const { status } = await updateBook(formRef.value.formData);
      if (status === 1000) {
        state.isShowModel = false;
        ElMessage.success("更新成功！");
        setBookList();
      } else {
        ElMessage.warning("更新失败，请重新尝试！");
      }
    }

    async function doSsearch() {
      const { status, data } = await searchBook({ name: state.searchKey });
      if (status === 1000) {
        state.tableData = data;
      }
    }

    return {
      ...toRefs(state),
      formRef,
      doAdd,
      doSsearch,
      onUpdate,
      doAction,
      setBookList,
    };
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
