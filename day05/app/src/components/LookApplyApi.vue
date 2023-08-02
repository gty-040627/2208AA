<template>
  <div>
    <el-dialog
      title="API权限列表"
      :visible.sync="dialogVisible"
      width="50%"
      :close-on-click-modal="false"
    >
      <el-row>
        <el-button
          type="primary"
          icon="el-icon-edit"
          size="small"
          @click="AddApi"
          >添加api权限</el-button
        >
      </el-row>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="name" label="菜单名称" width="150">
        </el-table-column>
        <el-table-column prop="code" label="权限限制" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>

    <AddApply ref="openAdd" :id="id" />
  </div>
</template>

<script>
import { QueryLookApi, QueryApply } from '../api/api'
import AddApply from '../components/AddApply.vue'
export default {
  props: ['id'],
  data() {
    return {
      // id: '',
      dialogVisible: false,
      tableData: [
        {
          code: '',
          description: '',
          enVisible: '',
          id: '',
          name: '',
          pid: 1,
          type: 3
        }
      ]
    }
  },
  methods: {
    //点击查看api权限
    OpenApiList() {
      // console.log(this.id)
      let id = this.id
      this.dialogVisible = true
      // console.log(id)
      QueryLookApi(id).then((res) => {
        console.log(res, 'QueryLookApply')
        QueryApply().then((res) => {
          this.tableData = res.data
        })
      })
    },
    //查看点击按钮
    handleClick(row) {
      let id = row.id
      console.log(id)
      this.$refs.openAdd.LookApply()
    },
    AddApi() {
      this.$refs.openAdd.openAddApply()
    }
  },
  created() {},
  mounted() {},
  components: {
    AddApply
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-row {
  float: right;
}
.el-table {
  margin-top: 10px;
}
</style>
