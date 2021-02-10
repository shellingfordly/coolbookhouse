import {
  ElButton,
  ElInput,
  ElRow,
  ElCol,
  ElDialog,
  ElForm,
  ElFormItem,
  ElTable,
  ElTableColumn,
  ElRadio,
  ElRadioGroup
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
  ElTableColumn,
  ElRadio,
  ElRadioGroup
]

export default function setup(app) {
  plugins.forEach(plugin => {
    app.use(plugin)
  })
}