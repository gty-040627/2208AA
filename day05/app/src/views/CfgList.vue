<template>
  <div>
    <div class="top">
      <div class="top-toping">
        <div><span>❗有0条考勤审批尚未处理</span></div>
        <div>
          <el-button type="primary" size="small">导入</el-button>
          <el-button type="primary" size="small">提醒</el-button>
          <el-button type="primary" size="small">设置</el-button>
          <el-button type="primary" size="small">历史归档</el-button>
          <el-button type="primary" size="small">三月份报表</el-button>
        </div>
      </div>
      <!-- 下面多选框 -->
      <div class="one">
        <span>部门：</span>
        <div v-for="item in tableData" :key="item.id" class="bumen">
          <el-checkbox>{{ item.departmentName }}</el-checkbox>
        </div>
      </div>
      <div class="two">
        <span> 考勤状态：</span>
        <el-checkbox v-model="checked">正常</el-checkbox>
        <el-checkbox v-model="checked">矿工</el-checkbox>
        <el-checkbox v-model="checked">事假</el-checkbox>
        <el-checkbox v-model="checked">调休</el-checkbox>
        <el-checkbox v-model="checked">迟到</el-checkbox>
        <el-checkbox v-model="checked">早退</el-checkbox>
      </div>
    </div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column property="username" label="姓名" width="120">
      </el-table-column>
      <el-table-column property="workNumber" label="工号" width="120">
      </el-table-column>
      <el-table-column property="departmentName" label="部门">
      </el-table-column>
      <el-table-column property="mobile" label="手机号"> </el-table-column>
      <el-table-column label="3/1">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/1">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/2">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/3">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/4">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/5">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/6">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/7">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/8">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/9">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/10">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/12">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/13">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/20">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/21">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/26">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/27">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/28">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/29">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/30">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
      <el-table-column label="3/31">
        <template>
          <p>旷工</p>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { QueryCfgList } from '../api/api'
export default {
  data() {
    return {
      pages: {
        page: 1,
        pagesize: 10
      },
      tableData: [{}],
      checked: false
    }
  },
  methods: {},
  created() {
    QueryCfgList(this.pages).then((res) => {
      // console.log(res, 'QueryCfgList')
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
.el-table {
  margin-top: 20px;
  border: 1px solid #cccccc70;
  border-radius: 3px;
  box-shadow: 5px 5px 0 0 #ccc;
}
.top {
  width: 99%;
  box-shadow: 5px 5px 0 p #ccc;
  height: 230px;
  margin: auto;
  border: 1px solid #cccccc4d;
  border-radius: 5px;
  .top-toping {
    width: 100%;
    height: 60px;
    line-height: 60px;
    // background-color: blue;
    display: flex;
    justify-content: space-between;
    div {
      margin: 0 20px;
      span {
        display: inline-block;
        width: 250px;
        height: 30px;
        border: 1px solid #c7e9ff;
        line-height: 30px;
        font-size: 15px;
        border-radius: 5px;
        background-color: #c7e9ff61;
      }
    }
  }
}

.el-checkbox {
  margin-left: 50px;
}
.two {
  margin-top: 30px;
}
.one {
  display: flex;
  margin-top: 10px;
  span {
    width: 200px;
    padding-left: 30px;
  }
}
.two {
  span {
    padding-left: 30px;
  }
  .el-checkbox {
    margin-left: 30px;
  }
}
</style>
