<template>
  <div>
    <el-dialog
      title="转正"
      :visible.sync="dialogVisible"
      width="50%"
      :close-on-click-modal="false"
    >
      <el-form ref="form" :model="sizeForm" label-width="120px">
        <div class="top">
          <div><img src="sizeForm.enclosure" alt="" /></div>
          <div>
            <p>管理员</p>
            <span>手机: 138000000002</span>
            <span>部门 总裁办</span> <br />
            <span>入职时间:2023-7-26 15:34:46</span>
          </div>
        </div>
        <el-form-item label="转正时间">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="sizeForm.dateOfCorrection"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="转正评价">
          <el-input v-model="sizeForm.correctionEvaluation"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { QueryUserChange } from '../api/api'
import moment from 'moment'
export default {
  props: ['id'],
  data() {
    return {
      sizeForm: {
        dateOfCorrection: '',
        correctionEvaluation: ''
      },
      dialogVisible: false
    }
  },
  methods: {
    OpenLookList() {
      this.dialogVisible = true
      // console.log(this.id)
      let id = this.id
      QueryUserChange(id).then((res) => {
        console.log(res, 'QueryUserChange')
        this.sizeForm = res.data
      })
    }
  },
  created() {},
  mounted() {},
  components: {},
  filters: {
    Tiem(e) {
      return moment(e).format('YYYY-M-DD HH:mm:ss')
    }
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 150px;
  display: flex;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 10px 30px;
    background-color: #ccc;
  }
  p {
    font-weight: 700;
    padding: 15px 0;
  }
  span {
    :nth-child(1) {
      padding: 10px 10px;
    }
  }
}
</style>
