<template>
  <div>
    <!-- 添加弹出框 -->
    <el-dialog title="添加权限" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="sizeForm" label-width="120px">
        <el-form-item label="权限名称">
          <el-input type="type" v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="权限标识">
          <el-input type="type" v-model="sizeForm.code"></el-input>
        </el-form-item>
        <el-form-item label="权限描述">
          <el-input type="type" v-model="sizeForm.description"></el-input>
        </el-form-item>
        <el-form-item label="企业可见">
          <el-switch
            v-model="sizeForm.enVisible"
            active-color="#66b1ff"
            inactive-color="#dcdfe6"
            active-value="1"
            inactive-value="0"
          >
          </el-switch>
        </el-form-item>
        <el-form-item label="企业顺序">
          <el-input type="type" v-model="sizeForm.menuOrder"></el-input>
        </el-form-item>
        <el-form-item label="菜单icon">
          <el-input type="type" v-model="sizeForm.menuIcon"></el-input>
        </el-form-item>

        <el-form-item size="large">
          <el-button type="primary" @click="AddApplyList">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- 查看弹出框 -->
    <el-dialog title="查看权限" :visible.sync="dialogVisible2" width="50%">
      <el-form ref="form" :model="sizeForm2" label-width="120px">
        <el-form-item label="权限名称">
          <el-input type="type" v-model="NewLookList.name"></el-input>
        </el-form-item>
        <el-form-item label="权限标识">
          <el-input type="type" v-model="NewLookList.code"></el-input>
        </el-form-item>
        <el-form-item label="权限描述">
          <el-input type="type" v-model="NewLookList.description"></el-input>
        </el-form-item>
        <el-form-item label="企业可见">
          <el-switch
            v-model="value2"
            active-color="#66b1ff"
            inactive-color="#dcdfe6"
          >
          </el-switch>
        </el-form-item>
        <el-form-item label="企业顺序">
          <el-input type="type" v-model="NewLookList.menuOrder"></el-input>
        </el-form-item>
        <el-form-item label="菜单icon">
          <el-input type="type" v-model="NewLookList.menuIcon"></el-input>
        </el-form-item>

        <el-form-item size="large">
          <el-button type="primary">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { QueryAddApply, QueryLookApply } from '../api/api'
export default {
  props: ['id'],
  data() {
    return {
      // 添加
      sizeForm: {
        pid: '0',
        type: 1
      },
      dialogVisible: false, //权限管理添加弹出框
      value: false,
      AddNewList: [{}],
      // 查看
      sizeForm2: {
        code: '',
        description: '',
        enVisible: '',
        menuIcon: '',
        menuOrder: '',
        name: '',
        pid: '',
        type: ''
      },
      dialogVisible2: false, //权限查看弹出框
      value2: false,
      NewLookList: [{}]
    }
  },
  methods: {
    openAddApply() {
      this.dialogVisible = true
    },
    //添加全权限管理
    AddApplyList() {
      QueryAddApply(this.sizeForm).then((res) => {
        console.log(res, 'QueryAddApply')
        this.dialogVisible = false
        this.$message({
          message: '添加成功',
          type: 'success'
        })
      })
    },
    // 查看的接口
    //打开查看的弹出框
    LookApply() {
      this.dialogVisible2 = true
      //获取id
      // console.log(this.id)
      let id = this.id
      // console.log(id)
      //查看的接口
      QueryLookApply(id).then((res) => {
        // console.log(res, 'QueryLookApply')
        this.NewLookList = res.data
      })
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
