<template>
  <div>
    <el-dialog
      title="设置"
      :visible.sync="dialogVisible"
      width="50%"
      :close-on-click-modal="false"
    >
      <el-tabs v-model="activeName">
        <el-tab-pane label="用户管理" name="first">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="部门">
              <el-select v-model="form.departmentName" placeholder="总裁办">
                <el-option
                  v-for="item in form"
                  :key="item.id"
                  :value="item.departmentName"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col :span="8">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form.afternoonEndTime"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col class="line" :span="1">-</el-col>
              <el-col :span="8">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form.afternoonStartTime"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
              <el-col class="line" :span="1">-</el-col>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          <el-form ref="form" :model="form2" label-width="80px">
            <el-form-item label="部门">
              <el-select v-model="form.departmentName" placeholder="总裁办">
                <el-option
                  v-for="item in form"
                  :key="item.id"
                  :value="item.departmentName"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="typeing">
              <div>假期类型</div>
              <div><span>类型</span><span>是否可用</span></div>
              <div>
                <p v-for="item in form2" :key="item.id">{{ item.jobStatu }}</p>
                <el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                >
                </el-switch>
              </div>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"
          >定时任务补偿</el-tab-pane
        >
      </el-tabs>
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
import { QueryCfgListSetOne } from '../api/api'
export default {
  data() {
    return {
      dialogVisible: false,
      activeName: 'first',
      form: {},
      form2: {},
      pages: {
        page: 1,
        pagesize: 10
      },
      value: true,
      departmentId: '1175311267684352000'
    }
  },
  methods: {
    OpenSet() {
      this.dialogVisible = true
      QueryCfgListSetOne({ departmentId: this.departmentId }).then((res) => {
        console.log(res, 'QueryCfgListSetOne')
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

<style lang="scss" scoped>
.typeing {
  width: 300px;
  display: flex;
  div {
    display: inline-block;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-weight: 700;
    }
  }
}
</style>
