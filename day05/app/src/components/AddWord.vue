<template>
  <div>
    <el-dialog title="申请" :visible.sync="dialogVisible" width="40%">
      <el-form ref="form" :model="sizeForm" label-width="120px">
        <el-form-item label="申请类型">
          <el-select v-model="sizeForm.processName">
            <el-option label="加班" value="加班"></el-option>
            <el-option label="离职" value="离职"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="加班开始时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="sizeForm.start_time"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="加班结束时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="sizeForm.end_time"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="补偿方式">
          <p>调休</p>
        </el-form-item>
        <el-form-item label="加班原因" prop="reason">
          <el-input
            type="textarea"
            v-model="sizeForm.reason"
            placeholder="请输入原因"
          ></el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="AddWordList">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { QueryAddWord } from '../api/api'
export default {
  data() {
    return {
      sizeForm: {
        processName: '',
        start_time: '',
        end_time: '',
        reason: ''
      },
      dialogVisible: false //加班离职弹出框
    }
  },
  methods: {
    //打开加班弹出框
    openAddWord() {
      this.dialogVisible = true
    },
    //点击提交确定按钮
    AddWordList() {
      QueryAddWord(this.sizeForm).then((res) => {
        // console.log(res, 'QueryAddWord')
        this.dialogVisible = false
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
