<template>
  <div>
    <el-dialog title="API权限列表" :visible.sync="dialogVisible" width="50%">
      <el-row>
        <el-button type="primary" icon="el-icon-edit" size="small"
          >主要按钮</el-button
        >
      </el-row>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="enVisible" label="菜单名称" width="150">
        </el-table-column>
        <el-table-column prop="type" label="权限限制" width="120">
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
  </div>
</template>

<script>
import { QueryLookApi } from '../api/api'
export default {
  props: ['id'],
  data() {
    return {
      dialogVisible: false,
      tableData: [{}]
    }
  },
  methods: {
    OpenApiList() {
      // console.log(this.id)
      let id = this.id
      this.dialogVisible = true
      console.log(id)
      QueryLookApi(id).then((res) => {
        console.log(res, 'QueryLookApply')
        // this.tableData = res.data
      })
    },
    //查看点击按钮
    handleClick() {}
  },
  created() {},
  mounted() {},
  components: {},
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
