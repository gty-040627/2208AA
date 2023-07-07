<template>
  <div class="big">
    <el-row class="one">
      <el-col :span="24" class="top"
        ><div class="grid-content bg-purple-dark">
          <div class="topButtom">
            <el-button type="primary" size="small">导入</el-button>
            <el-button type="primary" icon="el-icon-plus" size="small"
              >新添员工</el-button
            >
          </div>
        </div></el-col
      >
    </el-row>
    <el-row class="two">
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="companyId" label="序号" width="150">
            </el-table-column>
            <el-table-column prop="username" label="姓名" width="120" sortable>
            </el-table-column>
            <el-table-column prop="mobile" label="手机号" width="120" sortable>
            </el-table-column>
            <el-table-column
              prop="workNumber"
              label="工号"
              width="120"
              sortable
            >
            </el-table-column>
            <el-table-column
              prop="formOfEmployment"
              label="聘用形式"
              width="150"
              sortable
            >
            </el-table-column>
            <el-table-column
              prop="createTime"
              label="入职时间"
              width="170"
              sortable
            >
            </el-table-column>
            <el-table-column
              prop="departmentName"
              label="部门"
              width="150"
              sortable
            ></el-table-column>
            <el-table-column
              prop="enableState"
              label="入职状态"
              width="150"
              sortable
            >
              <template slot-scope="scope">
                <p v-if="scope.row.enableState == 1">在职</p>
                <p v-else>离职</p>
              </template>
            </el-table-column>
            <el-table-column
              prop="inServiceStatus"
              label="状态"
              width="150"
              sortable
            >
              <template slot-scope="scope">
                <p v-if="scope.row.inServiceStatus == 1">可用</p>
                <p v-else>不可用</p>
              </template>
            </el-table-column>

            <el-table-column fixed="right" label="操作" width="300">
              <template slot-scope="scope">
                <el-button type="text" size="small">查看</el-button>
                <el-button type="text" size="small">转正</el-button>
                <el-button type="text" size="small">调岗</el-button>
                <el-button type="text" size="small">离职</el-button>
                <el-button type="text" size="small">角色</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
import { QueryUser } from '../api/api'
export default {
  data() {
    return {
      tableData: [{}],
      page: {
        page: 1,
        size: 10
      }
    }
  },
  methods: {},
  created() {
    QueryUser(this.page).then((res) => {
      console.log(res, 'res')
      this.tableData = res.data.rows
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.big {
  width: 85vw;
  height: 100vh;
  background-color: #cccccc50;
}
.bg-purple-dark {
  background: #fff;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.top {
  margin: 20px 0;
  float: right;
}
.grid-content {
  min-height: 60px;
  line-height: 60px;
}
.topButtom {
  float: right;
}
.el-table-column {
  height: 50px;
}
.caozuo {
  color: blue;
}
.one {
  width: 98%;
  margin: auto;
}
.two {
  width: 98%;
  margin: auto;
  border-radius: 5px;
}
</style>
