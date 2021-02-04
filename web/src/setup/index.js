import {
  ElButton,
  ElInput,
  ElRow,
  ElCol,
  ElDialog,
  ElForm,
  ElFormItem,
  ElTable,
  ElTableColumn
} from 'element-plus';

const plugins = [
  ElButton,
  ElInput,
  ElRow,
  ElCol,
  ElDialog,
  ElForm,
  ElFormItem,
  ElTable,
  ElTableColumn
]

export default function setup(app) {
  plugins.forEach(plugin => {
    app.use(plugin)
  })
}