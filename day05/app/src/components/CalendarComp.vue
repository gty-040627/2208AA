<template>
  <div class="calendar">
    <div class="calendar_box public">
      <div class="header">工作日历</div>
      <div class="chooseTime">
        <el-select
          v-model="valueY"
          size="mini"
          style="width: 90px; margin-right: 10px"
        >
          <el-option
            v-for="item in optionsY"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="valueM" size="mini">
          <el-option
            v-for="item in optionsM"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <el-calendar v-model="timer" :first-day-of-week="1" :is-multiple="false">
        <template slot="dateCell" slot-scope="{ data }">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{
              data.day.split('-').slice(2).join('-') > 9
                ? data.day.split('-').slice(2).join('-')
                : data.day.split('-').slice(2).join('-').split('')[1]
            }}
          </p>
        </template>
      </el-calendar>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'calendarComp',
  components: {},
  data() {
    return {
      optionsM: [
        {
          value: '01',
          label: '01'
        },
        {
          value: '02',
          label: '02'
        },
        {
          value: '03',
          label: '03'
        },
        {
          value: '04',
          label: '04'
        },
        {
          value: '05',
          label: '05'
        },
        {
          value: '06',
          label: '06'
        },
        {
          value: '07',
          label: '07'
        },
        {
          value: '08',
          label: '08'
        },
        {
          value: '09',
          label: '09'
        },
        {
          value: '10',
          label: '10'
        },
        {
          value: '11',
          label: '11'
        },
        {
          value: '12',
          label: '12'
        }
      ],
      valueM: '07',
      optionsY: [],
      valueY: 2023
    }
  },
  created() {
    // 得到1980-2031年的年份数据
    for (let i = 1980; i < 2031; i++) {
      this.optionsY.push({
        value: i,
        label: i
      })
    }
  },
  mounted() {},
  methods: {},
  filters: {
    // 处理时间为：DD样式
    handleTime(time) {
      return moment(time).format('DD')
    }
  },
  computed: {
    // 切换显示当前年份和月份
    timer() {
      return `${this.valueY}-${this.valueM}-01` // 2022-02-01
    }
  }
}
</script>
<style scoped lang="scss">
.calendar_box {
  width: 100%;
  padding: 5px 10px;
  .header {
    width: 100%;
    color: #2c3e50;
    font-size: 24px;
    line-height: 64.26px;
    padding-left: 10px;
    border-bottom: 1px solid #cccccc65;
  }
  .chooseTime {
    text-align: right;
    line-height: 70px;
    padding-right: 20px;
    .el-select {
      width: 70px;
    }
  }
  .el-calendar {
    width: 100%;
    // height: 378px;

    ::v-deep .el-calendar__header {
      display: none;
    }
    // 替代ui样式
    ::v-deep .el-calendar-table td.is-today {
      color: #fff;
    }
    ::v-deep .el-calendar-table td.is-today p {
      width: 25px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      border-radius: 50%;
      display: inline-block;
      background-color: rgb(39, 122, 255);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    ::v-deep .el-calendar-table .el-calendar-day {
      position: relative;
      box-sizing: border-box;
      padding: 0 8px;
      line-height: 30px;
      text-align: center;
      height: 30px;
    }
    ::v-deep .el-calendar-table thead th:nth-child(n + 6) {
      color: rgba(248, 18, 18, 0.451);
    }
    ::v-deep .el-calendar-table tbody td:nth-child(n + 6) {
      position: relative;
    }
    ::v-deep
      .el-calendar-table
      tbody
      td:nth-child(n + 6)
      .el-calendar-day
      p::after {
      content: '休';
      color: #fff;
      position: absolute;
      padding: 2px;
      background-color: rgb(253, 92, 92);
      border-radius: 100%;
      width: 16px;
      height: 16px;
      line-height: 16px;
      text-align: center;
      top: 4px;
      right: 3px;
      font-size: 13px;
    }
    ::v-deep .el-calendar-table thead th:nth-child(n + 4) {
      font-weight: bolder;
    }
    .xiu {
      color: #fff;
      display: inline-block;
      background-color: tomato;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border-radius: 50%;
      font-size: 12px;
      margin-left: 6px;
    }

    ::v-deep .el-calendar-table td,
    ::v-deep .el-calendar__header,
    ::v-deep .el-calendar-table tr:first-child td,
    ::v-deep .el-calendar-table tr td:first-child {
      border: none;
    }
  }
}
.public {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 #ccc;
  overflow: hidden;
}
</style>
