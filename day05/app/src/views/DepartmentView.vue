<template>
  <div>
    <div class="top">
      <p>组织架构</p>
    </div>
    <p class="title">
      <i class="el-icon-share"></i>江苏传智播客科技股份有限公司
    </p>
    <!-- 内容 -->
    <el-tree
      :data="department"
      :props="defaultProps"
      @node-click="handleNodeClick"
    >
    </el-tree>
  </div>
</template>

<script>
import { QueryDepartment } from '../api/api'
export default {
  data() {
    return {
      // data: [
      //   {
      //     label: '一级 1',
      //     children: [
      //       {
      //         label: '二级 1-1',
      //         children: [
      //           {
      //             label: '三级 1-1-1'
      //           }
      //         ]
      //       }
      //     ]
      //   },
      //   {
      //     label: '一级 2',
      //     children: [
      //       {
      //         label: '二级 2-1',
      //         children: [
      //           {
      //             label: '三级 2-1-1'
      //           }
      //         ]
      //       },
      //       {
      //         label: '二级 2-2',
      //         children: [
      //           {
      //             label: '三级 2-2-1'
      //           }
      //         ]
      //       }
      //     ]
      //   },
      //   {
      //     label: '一级 3',
      //     children: [
      //       {
      //         label: '二级 3-1',
      //         children: [
      //           {
      //             label: '三级 3-1-1'
      //           }
      //         ]
      //       },
      //       {
      //         label: '二级 3-2',
      //         children: [
      //           {
      //             label: '三级 3-2-1'
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ],
      defaultProps: {
        label: 'name'
        // children: 'introduce',
      },
      department: [{}]
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    }
  },
  created() {
    QueryDepartment().then((res) => {
      // console.log(res, 'QueryDepartment')
      this.department = res.data.depts
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.top {
  width: 90%;
  margin: auto;
  height: 70px;
  line-height: 90px;
  padding-left: 0px;
  border-bottom: 2px solid #ccc;
  p {
    color: #409eff;
    width: 80px;
    height: 70px;
    border-bottom: 2px solid #409eff;
  }
}

.title {
  padding: 20px 100px;
}
.el-tree {
  padding-left: 100px;
}
</style>
