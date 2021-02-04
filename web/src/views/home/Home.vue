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
            @keyup.enter="searchBook"
            size="small"
          />
          <el-button type="primary" size="small" @click="searchBook">
            查询
          </el-button>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      
      <p class="notes">
        未做严格检查，希望大家自觉填写可用的下载地址，勿让找书的好友空欢喜一场。
      </p>
      <home-table :list="showData" />
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
import { ref, defineComponent } from "vue";
import { ElMessage } from "element-plus";
import HomeForm from "./components/HomeForm.vue";
import HomeTable from "./components/HomeTable.vue";

export default defineComponent({
  name: "HelloWorld",
  components: { HomeForm, HomeTable },
  setup() {
    const formRef = ref(null);
    const searchKey = ref("");
    const isShowModel = ref(false);
    const list = ref([]);
    const showData = ref([...list.value]);

    async function doAdd() {
      const { status, data } = await formRef.value.validate();
      if (!status) return;
      list.value.push(data);
      showData.value.push(data);
      isShowModel.value = false;
      ElMessage.success("添加成功！感谢您的支持！");
      formRef.value.resetFormData();
    }

    function searchBook() {
      showData.value = list.value.filter((v) =>
        v.name.includes(searchKey.value)
      );
    }

    return { searchKey, showData, isShowModel, formRef, doAdd, searchBook };
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
