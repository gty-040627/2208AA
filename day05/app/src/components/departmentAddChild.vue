<template>
  <div>
    <el-dialog title="编辑部门" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="90px">
        <el-form-item label="部门名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="部门编码">
          <el-input v-model="form.companyId"></el-input>
        </el-form-item>
        <el-form-item label="活动负责人">
          <el-select v-model="form.manager" placeholder="请选择">
            <el-option label="管理员" value="管理员"></el-option>
            <el-option label="罗晓晓" value="罗晓晓"></el-option>
            <el-option label="孙财" value="孙财"></el-option>
            <el-option label="桥海" value="桥海"></el-option>
            <el-option label="罗逍逍" value="罗逍逍"></el-option>
            <el-option label="巴思慧" value="巴思慧"></el-option>
            <el-option label="周乐天" value="周乐天"></el-option>
            <el-option label="董豪空" value="董豪空"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="部门介绍">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="AddList">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { QueryDepartmentAdd } from '../api/api'
export default {
  data() {
    return {
      form: {},
      dialogVisible: false
    }
  },
  methods: {
    OpenAddChild() {
      this.dialogVisible = true
    },
    AddList() {
      this.$emit('AddList', this.form)
      this.dialogVisible = false
      QueryDepartmentAdd(this.form).then((res) => {
        console.log(res, 'QueryDepartmentAdd')
        this.$message({
          message: '添加成功!',
          type: 'success'
        })
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
