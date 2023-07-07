<template>
  <div class="bgColor">
    <div class="about">
      <!-- 上 -->
      <div class="item1">
        <div><img src="../assets/common/head.jpg" alt="" /></div>
        <div class="title">
          <p>早安，管理员，祝你开心每一天</p>
          <span>管理员 | 传智播客-总裁办</span>
        </div>
      </div>
      <!-- 中间 -->
      <div class="item2">
        <!-- 日历 -->
        <div class="ZhongLeft">
          <div class="top-item"><p>工作日历</p></div>
          <div class="dateing">
            <el-date-picker
              v-model="value"
              type="month"
              size="mini"
              style="width: 150px"
              :clearable="false"
            ></el-date-picker>
          </div>
          <el-calendar v-model="value">
            <template slot="dateCell" slot-scope="{ date }">
              <div class="date-content">
                <span class="text">{{ getDay(date) }}</span>
                <span v-if="isWeek(date)" class="rest">休</span>
              </div>
            </template>
          </el-calendar>
        </div>
        <!-- 中间右 -->
        <div class="ZhongRight">
          <div class="RightTop">
            <p>流程申请</p>
            <span @click="OpenAddWord">加班离职</span>
            <span @click="HandleLeave">请假调休</span>
            <span>审批列表</span>
            <br />
            <span>我的信息</span>
          </div>
          <div class="RightButtom">
            <p>快速开始/便捷导航</p>
            <span>人事月报</span>
            <span>考勤查询</span>
            <span>考勤统计</span>
            <br />
            <span>员工审核</span>
            <span>组织架构</span>
          </div>
        </div>
      </div>
      <!-- 下边 -->
      <div class="item3">
        <div class="GongGao">
          <p class="fontWeight">公告</p>
          <div>
            <img src="../assets/common/img.jpeg" alt="" />
            <span
              >朱继柳 发布了 第1期“传智大讲堂”互动讨论获奖名单公布<br />
              201807-2115:21:38</span
            >
          </div>
          <div>
            <img src="../assets/common/img.jpeg" alt="" />
            <span
              >朱继柳 发布了 第1期“传智大讲堂”互动讨论获奖名单公布<br />

              201807-2115:21:38</span
            >
          </div>
          <div>
            <img src="../assets/common/img.jpeg" alt="" />
            <span
              >朱继柳 发布了 第1期“传智大讲堂”互动讨论获奖名单公布<br />
              201807-2115:21:38</span
            >
          </div>
        </div>
        <!-- 下 右 -->
        <div class="XiaYou">
          <p>帮忙链接</p>
          <div><img src="../assets//common/icon.png" alt="" /></div>
          <div>
            <span>入门指南</span>
            <span>在线帮忙手册</span>
            <span>联系技术支持 </span>
          </div>
        </div>
      </div>

      <!-- 加班离职弹出框 -->
      <el-dialog title="申请" :visible.sync="dialogVisible" width="40%">
        <el-form ref="form" :model="sizeForm" label-width="120px">
          <el-form-item label="申请类型">
            <el-select v-model="sizeForm.region">
              <el-option label="加班" value="0"></el-option>
              <el-option label="离职" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="加班开始时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="sizeForm.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="加班结束时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="sizeForm.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="补偿方式">
            <p>调休</p>
          </el-form-item>
          <el-form-item label="加班原因" prop="desc">
            <el-input
              type="textarea"
              v-model="sizeForm.desc"
              placeholder="请输入原因"
            ></el-input>
          </el-form-item>
          <el-form-item size="large">
            <el-button type="primary">提交</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>

      <!-- 请假调休 -->
      <el-dialog title="请假" :visible.sync="dialogVisible2" width="40%">
        <el-form ref="form" :model="sizeForm2" label-width="120px">
          <el-form-item label="假期类型">
            <el-select v-model="sizeForm2.region">
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
                v-model="sizeForm2.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="结束时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="sizeForm2.date1"
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
              v-model="sizeForm.desc"
              placeholder="请输入原因"
            ></el-input>
          </el-form-item>
          <el-form-item size="large">
            <el-button type="primary">提交</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(), // 日历
      dialogVisible: false, //加班离职弹出框
      dialogVisible2: false, //请假调休弹出框
      sizeForm: {},
      sizeForm2: {}
    }
  },
  methods: {
    // 标注今天日期
    getDay(date) {
      return date.getDate()
    },
    isWeek(date) {
      return date.getDay() === 6 || date.getDay() === 0
    },
    //加班离职点击弹框
    OpenAddWord() {
      this.dialogVisible = true
    },
    //请假调休
    HandleLeave() {
      this.dialogVisible2 = true
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
* {
  padding: 0;
  margin: 0;
}
.bgColor {
  width: 84vw;
  // height: 100vh;
  background-color: #cccccc3b;
}
.el-button {
  width: 100px;
  height: 30px;
}
.el-form-item {
  margin: 20px 0;
}
.about {
  width: 100%;
  height: 100%;
  position: relative;
  .item1 {
    width: 99%;
    height: 180px;
    background-color: #fff;
    box-shadow: 5px 5px 5px 5px #cccccc74;
    position: absolute;
    top: 5px;
    left: 5px;
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      margin-left: 30px;
    }
    .title {
      margin-left: 30px;
      p {
        font-size: 26px;
        padding-bottom: 20px;
      }
      span {
        font-size: 20px;
        color: #8d8383;
      }
    }
  }
}
.item2 {
  width: 99%;
  height: 600px;
  position: absolute;
  top: 100px;
  left: 5px;
  // background-color: pink;
  position: absolute;
  top: 200px;
  display: flex;
  justify-content: space-between;
  .ZhongLeft {
    width: 58%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 5px 5px 5px 5px #cccccc74;
  }
  .ZhongRight {
    width: 40%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 5px 5px 5px 5px #cccccc74;
  }
}

.ZhongLeft {
  .dateing {
    width: 100%;
    height: 30px;
    background-color: #fff;
    position: relative;
  }
  .el-date-picker {
    position: absolute;
    left: 400px;
  }
  .el-calendar {
    width: 100%;
    height: 450px;
  }
  .top-item {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    font-size: 23px;
    padding: 20px 40px;
  }
}
.ZhongRight {
  background-color: #cccccc2a;
  .RightTop {
    width: 100%;
    height: 35%;
    border-radius: 5px;
    box-shadow: 5px 5px 5px 5px #cccccc74;
    background-color: #fff;
    padding: 10px;
    p {
      font-size: 25px;
      height: 50px;
      line-height: 50px;
      padding-left: 20px;
      width: 150px;
      border-bottom: 3px solid #409eff;
      width: 150px;
    }
    span {
      display: inline-block;
      width: 140px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border: 1px solid #998f8f;
      color: #999090;
      border-radius: 5px;
      margin: 10px;
    }
  }
  .RightButtom {
    width: 100%;
    height: 50%;
    box-shadow: 5px 5px 5px 5px #cccccc74;
    border-radius: 5px;
    background-color: #fff;
    padding: 10px;
    margin-top: 100px;
    p {
      font-size: 25px;
      height: 50px;
      line-height: 50px;
      padding-left: 10px;
      width: 250px;
      border-bottom: 3px solid #409eff;
      width: 250px;
    }
    span {
      display: inline-block;
      width: 140px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border: 1px solid #998f8f;
      color: #999090;
      border-radius: 5px;
      margin: 10px;
    }
  }
}
.item3 {
  width: 98%;
  display: flex;
  justify-content: space-between;

  .GongGao {
    position: absolute;
    top: 850px;
    width: 60%;
    height: 400px;
    // background-color: pink;
    box-shadow: 5px 5px 5px 5px #cccccc74;
    .fontWeight {
      font-weight: 700;
      width: 100%;
      height: 70px;
      line-height: 70px;
      padding-left: 30px;
      border-bottom: 1px solid #ccc;
    }
    div {
      width: 90%;
      margin: auto;
      height: 100px;
      display: flex;
      margin-left: 30px;
      border-bottom: 1px solid #ccc;
      img {
        width: 80px;
        height: 80px;
        margin-top: 20px;
      }
      span {
        padding-top: 20px;
      }
    }
  }
  .XiaYou {
    width: 37%;
    height: 200px;
    box-shadow: 5px 5px 5px 5px #cccccc74;
    border-bottom: 1px solid #ccc;
    position: absolute;
    border-radius: 5px;
    top: 870px;
    left: 800px;
    padding: 20px;
    p {
      width: 100px;
      font-size: 23px;
      border-bottom: 3px solid #409eff;
    }
    img {
      width: 70%;
      height: 50px;
      margin: 20px 30px;
    }
    span {
      padding: 25px;
    }
  }
}

//日历
.select-box {
  display: flex;
  justify-content: flex-end;
}

::v-deep .el-calendar-day {
  height: auto;
}

::v-deep .el-calendar-table__row td.prev {
  border: none;
}
.date-content {
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.date-content .rest {
  color: #fff;
  border-radius: 50%;
  background: rgb(250, 124, 77);
  width: 20px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
  font-size: 12px;
  margin-left: 10px;
}
.date-content .text {
  width: 20px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
}
::v-deep .el-calendar-table td.is-selected .text {
  background: #409eff;
  color: #fff;
  border-radius: 50%;
}
::v-deep .el-calendar__header {
  display: none;
}
</style>
