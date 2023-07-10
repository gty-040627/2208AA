<template>
  <div class="bg">
    <div class="top">
      <div class="top-title">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登录账户个人" name="first">
            <!-- 登录账户设置 -->
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="姓名">
                <el-input v-model="form.username"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="form.password" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">更新</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <!-- 个人信息 -->
          <el-tab-pane label="个人信息" name="second">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="工号">
                <el-input v-model="form.workNumber"></el-input>
              </el-form-item>
              <el-form-item label="入职时间">
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.createTime"
                    style="width: 100%"
                  ></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="姓名">
                <el-input v-model="form.username"></el-input>
              </el-form-item>
              <el-form-item label="部门">
                <el-input v-model="form.departmentName"></el-input>
              </el-form-item>
              <el-form-item label="手机">
                <el-input v-model="form.mobile"></el-input>
              </el-form-item>
              <el-form-item label="员工图片">
                <img :src="form.staffPhoto" alt="" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary">保留更新更新</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <!-- 岗位设置 -->
          <el-tab-pane label="岗位信息" name="third">角色管理</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { QueryUserLook } from '../api/api'
export default {
  data() {
    return {
      activeName: 'first',
      page: {
        page: 1,
        size: 10
      },
      form: {
        username: ''
      }
    }
  },
  methods: {
    handleClick() {}
  },
  created() {
    // console.log(this.$route.query.id)
    let id = this.$route.query.id
    QueryUserLook(id).then((res) => {
      // console.log(res, 'QueryUser')
      this.form = res.data
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100%;
  background-color: #cccccc4c;
  position: relative;
}
.top {
  width: 98%;
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  top: 20px;
  left: 10px;
  .top-title {
    width: 100%;
    height: 60px;
    line-height: 60px;
  }
}

.el-tabs {
  margin: 20px 40px;
}
img {
  width: 12px;
  height: 120px;
}
</style>
