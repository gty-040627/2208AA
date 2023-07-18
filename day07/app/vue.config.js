const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	publicPath: "./", //根目录
	outputDir: "./dist", //打包后的目录
	assetsDir: "assets", //打包后的静态资源存放地址
	// devServer:{
	// 	port: "9080", //项目运行时端口
	//   host: "0.0.0.0", //运行时域名
	//   https: false, //是否使用https协议
	//   open: false, //是否启动项目后直接打开浏览器
	// 	proxy: {
	// 		'/v1':{
	// 			 changeOrigin:true, // 配置代理默认开启target方式
	// 			 secure:false,   //如果是http接口，需要配置该参数
	// 			 target: 'http://152.136.57.19:5555/api/private/v1',
	// 				pathRewrite:{
	// 					"^/v1":""
	// 				}
	// 		},
	// }
	// }
})
