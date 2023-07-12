<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="24">
        <el-card shadow="always">
          <el-tabs v-model="activeName">
            <el-tab-pane label="组织架构" name="first"></el-tab-pane>
          </el-tabs>
          <div class="mentBox">
            <div class="topBox">
              <span>
                <svg-icon icon-class="bank-fill"> </svg-icon>
                <b> 江苏传智播客教育科技股份有限公司</b>
              </span>
              <div class="rightBox">
                <span class="spx">负责人</span>
                <el-dropdown @command="flag1">
                  <span class="el-dropdown-link">
                    操作<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="add"
                      >添加子部门</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <!-- 树状结构 -->
            <el-tree
              :data="listData"
              node-key="id"
              icon-class="iconfont icon-jiahaozhankai"
              :expand-on-click-node="true"
            >
              <span class="custom-tree-node" slot-scope="{ node, data }">
                <span>{{ node.name }}</span>
                <span>{{ data.name }}</span>
                <span class="rightText">
                  <span>{{ data.manager }}</span>
                  <el-dropdown @command="flag">
                    <span class="el-dropdown-link">
                      操作<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item
                        :command="{ id: data.id, status: 'add' }"
                        >添加子部门</el-dropdown-item
                      >
                      <el-dropdown-item
                        :command="{ id: data.id, status: 'look' }"
                        >查看部门</el-dropdown-item
                      >
                      <el-dropdown-item
                        :command="{ id: data.id, status: 'del' }"
                        >删除部门</el-dropdown-item
                      >
                    </el-dropdown-menu>
                  </el-dropdown>
                </span>
              </span>
            </el-tree>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- //添加子部门 -->
    <departmentAddChild ref="Open" @AddList="AddList" />
    <!-- 查看子部门 -->
    <departmentLook ref="OpenList" />
  </div>
</template>

<script>
import { QueryDepartment } from '../api/api'
import departmentAddChild from '../components/departmentAddChild.vue'
import departmentLook from '../components/departmentLook.vue'
export default {
  data() {
    return {
      listData: [],
      activeName: '',
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        }
      ]
      // id: 0
    }
  },
  methods: {
    flag1(command) {
      if (command == 'add') {
        this.$refs.Open.OpenAddChild()
      }
    },
    flag(val) {
      // console.log(val)
      if (val.status == 'del') {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$message({
              type: 'info',
              message: 'Request failed with status code 405'
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
      } else if (val.status == 'look') {
        // console.log(val.id)
        // this.id = val.id
        this.$refs.OpenList.OpenLook(val.id)
      } else if (val.status == 'add') {
        this.$refs.Open.OpenAddChild()
      }
    },
    AddList() {
      QueryDepartment().then((res) => {
        console.log(res, 'QueryDepartment')
        this.dialogVisible = false
        QueryDepartment().then((res) => {
          this.listData = res.data.depts
        })
      })
    }
  },
  created() {
    QueryDepartment().then((res) => {
      // console.log(res)
      res.data.depts.forEach((item) => {
        let { id, name, pid, manager } = item
        if (pid == '') {
          this.listData.push({
            id,
            name,
            manager,
            children: []
          })
        } else {
          let index = this.listData.findIndex((it) => it.id == pid)
          if (index == -1) {
            for (let i = 0; i < this.listData.length; i++) {
              let obj = this.listData[i].children.find((v) => v.id == pid)
              if (obj) {
                obj.children.push(item)
              }
            }
          } else {
            this.listData[index].children.push({
              ...item,
              children: []
            })
          }
        }
      })
    })
  },
  mounted() {},
  components: {
    departmentAddChild,
    departmentLook
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-card {
  padding: 20px 40px;
  .mentBox {
    padding: 30px 100px;
    .topBox {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #cfcfcf;
      padding-bottom: 10px;
      margin-bottom: 20px;
      .spx {
        padding-right: 20px;
      }
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
}
::v-deep .el-tree-node {
  padding: 6px 0;
  .custom-tree-node {
    width: 100%;
    display: flex;
    .rightText {
      margin-left: auto;
      > span {
        padding-right: 20px;
      }
    }
  }
}
::v-deep .el-dropdown-menu__item {
  color: #409eff;
}
::v-deep .is-leaf::before {
  content: '\e633';
  font-size: 20px;
  font-family: 'iconfont';
  color: #000;
}
::v-deep .expanded::before {
  content: '\e722';
  font-size: 20px;
  font-family: 'iconfont';
  color: #000;
}
::v-deep .el-tree-node__expand-icon {
  content: '\e721';
  font-size: 20px;
  font-family: 'iconfont';
  color: #000;
}
::v-deep .el-tree-node__expand-icon {
  transition: none;
}
</style>
