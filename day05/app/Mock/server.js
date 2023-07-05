//1.引入express
let express = require('express')
//2. 引入mockjs数据
const Mock = require('mockjs')
//3. 引入login返回的data数据
const loginData = require('./common/login.json')
//3.1 引入新增部门
const addPrever = require('./common/addPrever.json')
//4. 实例化express
const app = express()

// 5. 编写接口，添加返回值

/**登录接口 */
app.use('/sys/login', function (req, res) {
  res.json(
    Mock.mock({
      status: 200,
      msg: '登录成功',
      data: loginData
    })
  )
})

//新增部门接口
app.use('/company/department', function (req, res) {
  res.json(
    Mock.mock({
      status: 200,
      msg: '登录成功',
      data: addPrever
    })
  )
})

app.listen('8090', () => {
  console.log('监听端口 8090')
})
