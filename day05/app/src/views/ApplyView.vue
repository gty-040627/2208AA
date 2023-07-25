<template>
  <div>
    <div class="top">
      <el-button
        type="primary"
        icon="el-icon-edit"
        size="small"
        @click="OpenApply"
        >添加菜单</el-button
      >
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="name" label="菜单名称" width="250">
      </el-table-column>
      <el-table-column prop="code" label="权限标识" width="250">
      </el-table-column>
      <el-table-column prop="description" label="描述" width="300">
      </el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="OpenApply"
            >添加权限点</el-button
          >
          <el-button type="text" size="small" @click="LookApiList(scope.row)"
            >查看api权限</el-button
          >
          <el-button type="text" size="small" @click="Openlook(scope.row)"
            >查看</el-button
          >
          <el-button type="text" size="small" plain @click="del">
            删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加和查看的弹出框子组件 -->
    <AddApply ref="Apply" :id="id" />
    <!-- 查看api权限 -->
    <LookApplyApi ref="LookApi" :id="id" />
  </div>
</template>

<script>
import AddApply from '../components/AddApply.vue'
import LookApplyApi from '../components/LookApplyApi.vue'
import { QueryApply } from '@/api/api'
export default {
  data() {
    return {
      tableData: [{}],
      id: 0 //传递给子组件新数据
    }
  },
  methods: {
    //接受页面表格
    GetList() {
      QueryApply().then((res) => {
        // console.log(res, 'QueryApply')
        this.tableData = res.data
      })
    },
    //接收子组件的添加弹出框
    OpenApply() {
      //添加 查看的子组件接受的接口
      this.$refs.Apply.openAddApply()
    },
    //删除
    del() {
      this.$notify({
        title: '提示',
        message: '演示系统，不支持此操作',
        duration: 0
      })
    },
    //查看
    //接收子组件的查看弹出框
    Openlook(row) {
      // console.log(row)
      this.id = row.id
      // console.log(this.id, '22')
      this.$nextTick(() => {
        this.$refs.Apply.LookApply()
      })
    },
    LookApiList(row) {
      // console.log(row)
      this.id = row.id
      // console.log(this.id, '2222')
      this.$refs.LookApi.OpenApiList()
    }
  },
  created() {
    this.GetList()
  },
  mounted() {},
  components: {
    AddApply,
    LookApplyApi
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.top {
  float: right;
  margin-bottom: 20px;
  .el-buttom {
    margin: 20px;
  }
}
</style>
