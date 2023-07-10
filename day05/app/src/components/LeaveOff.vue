<template>
  <div>
    <el-dialog title="请假调休" :visible.sync="dialogVisible2" width="40%">
      <el-form ref="form" :model="sizeForm2" label-width="120px">
        <el-form-item label="假期类型">
          <el-select v-model="sizeForm2.processName">
            <el-option label="请假" value="0"></el-option>
            <el-option label="调休" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请单位">
          <p>按天</p>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="sizeForm2.startTime"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="sizeForm2.endTime"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="sizeForm2.name"></el-input>
        </el-form-item>
        <el-form-item label="申请原因" prop="desc">
          <el-input
            type="textarea"
            v-model="sizeForm2.reason"
            placeholder="请输入原因"
          ></el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="LeaveOffList">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { QueryLeaveOff } from '../api/api'
export default {
  data() {
    return {
      sizeForm2: {},
      dialogVisible2: false //请假调休弹出框
    }
  },
  methods: {
    openHandleLeave() {
      this.dialogVisible2 = true
    },
    LeaveOffList() {
      QueryLeaveOff(this.sizeForm2).then((res) => {
        // console.log(res, 'QueryLeaveOff')
        this.dialogVisible2 = false
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
