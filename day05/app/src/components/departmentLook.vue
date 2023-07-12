<template>
  <div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="60%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="部门名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="部门编码">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="活动负责人">
          <el-select v-model="form.manager" placeholder="管理员">
            <el-option label="管理员" value="管理员"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="部门介绍">
          <el-input v-model="form.introduce"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { QueryDepartmentLook } from '../api/api'
export default {
  props: ['id'],
  data() {
    return {
      form: {
        type: 1,
        name: '',
        code: '',
        description: '',
        pointClass: '',
        pointIcon: '',
        pointStatus: '',
        enVisible: ''
      },
      dialogVisible: false,
      Newform: {}
    }
  },
  methods: {
    OpenLook(id) {
      this.dialogVisible = true
      // console.log(this.id)
      // let id = val.id
      // console.log(id, 'id')
      QueryDepartmentLook(id).then((res) => {
        console.log(res, 'QueryDepartmentLook')
        this.form = res.data
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
