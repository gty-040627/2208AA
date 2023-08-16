<template>
	<view class="content">
		<!-- 头部部分 -->
		<div class="top" :style="{ backgroundColor:imgData[swiperIndex].background}">
		 <div class="ipt-box">
		 	<input type="text" placeholder="搜索你想要的内容" class="ipt-top" @click="gotoSearch">
		 </div>
			<!-- 轮播图 -->
			<swiper indicator-dots indicator-active-color="#fff" autoplay :interval="3000" class="swipering"
				:duration="duration" @animationfinish="animationfinish">
				<swiper-item v-for="item in imgData" :key="item.id">
					<image :src="item.url" class="imgs"></image>
				</swiper-item>
			</swiper>
		</div>

		<!-- nav 标题 -->
		<div class="NavList">
			<div v-for="item in NewNav" :key="item.id" class="NavList-name">
				<div>{{item.name}}</div>
			</div>
			<div class="NavList-name">全部分类</div>
		</div>

		<!-- 热门推荐 -->
		<div class="host">  
			<p>热门推荐</p>
			<span>全部 > </span>
		</div>
		<div class="scrollTest">
			<div class="box" v-for="(item, index) in HostList">
				<div class="list">
					<div>
						<span class="time">{{item.totalTime}}</span>
						<image :src="imgs(item.mainImage)" class="HostLImg"></image>
					</div>
					<div>
						<p>{{item.title}}</p>
						<span class="name">{{item.nickName}}</span>
						<span class="price">￥{{item.priceDiscount}} <span class="preson">⏹{{item.commTotal}}人在学</span> </span>
					</div>
				</div>
			</div>
		</div>

		<!-- 最新上新 -->
		<div class="host">
			<p>最新上新</p>
			<span>全部 > </span>
		</div>
		<div class="Host2">
			<div class="box2" v-for="(item, index) in HostList2">
				<div class="list2">
					<div>
						<image :src="imgs(item.mainImage)" class="HostLImg"></image>
					</div>
					<div>
						<p>{{item.title}}</p>
						<span class="name">{{item.nickName}}</span>
						<span class="price">￥{{item.priceDiscount}} <span class="preson">⏹{{item.commTotal}}人在学</span> </span>
					</div>
				</div>
			</div>
		</div>

		<!-- 免费精选 -->
		<div class="host">
			<p>免费精选</p>
			<span>全部 > </span>
		</div>
		<div class="scrollTest">
			<div class="box" v-for="(item, index) in HostList3">
				<div class="list">
					<div>
						<span class="time">{{item.totalTime}}</span>
						<image :src="imgs(item.mainImage)" class="HostLImg"></image>
					</div>
					<div>
						<p>{{item.title}}</p>
						<span class="name">{{item.nickName}}</span>
						<span class="price">￥{{item.priceDiscount}} <span class="preson">⏹{{item.commTotal}}人在学</span> </span>
					</div>
				</div>
			</div>
		</div>

		<!-- 付费精品 -->
		<div class="host">
			<p>付费精品</p>
			<span>全部 > </span>
		</div>

		<div class="list4" v-for="(item, index) in HostList4">
			<div>
				<span class="time">{{item.totalTime}}</span>
				<image :src="imgs(item.mainImage)" class="HostLImg"></image>
			</div>
			<div>
				<p>{{item.title}}</p>
				<span class="name">{{item.nickName}}</span>
				<span class="price">￥{{item.priceDiscount}} <span class="preson">⏹{{item.commTotal}}人在学</span> </span>
			</div>
		</div>
	</view>
</template>

<script>
	import http from "../../api/http.js"
	export default {
		data() {  
			return {
				swiperIndex: 0, //轮播图下标
				imgData: [{
						id: 1,
						url: '../../static/banner-img/banner1.jpg',
						background: '#45328c'
					},
					{
						id: 2,
						url: '../../static/banner-img/banner2.jpg',
						background: '#006c00'
					},
					{
						id: 3,
						url: '../../static/banner-img/banner3.jpg',
						background: '#0072b7'
					}
				],
				duration: 500,
				current: 0,
				mode: 'default',
				NavList: {},
				NewNav: {},
				HostList: {},
				HostList2: {},
				HostList3: {},
				HostList4: {}
			}
		},
		onLoad() {
			this.GetNva()
			this.GetHostList()
			this.GetHostList2()
			this.GetHostList3()
			this.GetHostList4()
		},
		methods: {
			//轮播图变换背景设置
			animationfinish(e) {
				// console.log(e, 'eeee');
				this.swiperIndex = e.detail.current
			},
			// nav 接口
			GetNva() {
				//navlist接口
				http({
					url: "/article/api/category/label/list"
				}).then(res => {
					// console.log(res, 'NavList');
					this.NavList = res.data
					let array = this.NavList.slice(0, 7)
					this.NewNav = array
					// console.log(this.NewNav);
				})
			},
			// 热门推荐 
			GetHostList() {
				//navlist接口
				http({
					url: "/course/api/course/search",
					method: "POST",
					data: {
						current: 1,
						size: 8,
						sort: "hot"
					}
				}).then(res => {
					console.log(res, 'GetHostList');
					this.HostList = res.data.records

				})
			},
			//图片处理
			imgs(imging) {
				if (imging.startsWith('http') || imging.startsWith('https')) {
					return imging;
				} else {
					return 'http://m.mengxuegu.com' + imging; // 在这里拼接你的URL前缀
				}
			},
			//最新上新
			GetHostList2() {
				//navlist接口
				http({
					url: "/course/api/course/search",
					method: "POST",
					data: {
						current: 1,
						isFree: 1,
						size: 8
					}
				}).then(res => {
					// console.log(res, 'GetHostList2');
					this.HostList2 = res.data.records
				})
			},
			//免费精选
			GetHostList3() {
				//navlist接口
				http({
					url: "/course/api/course/search",
					method: "POST",
					data: {
						current: 1,
						size: 10,
						sort: "new"
					}
				}).then(res => {
					// console.log(res, 'GetHostList3');
					this.HostList3 = res.data.records
				})
			},
			//付费精品
			GetHostList4() {
				//navlist接口
				http({
					url: "/course/api/course/search",
					method: "POST",
					data: {
						current: 1,
						isFree: 0,
						size: 10
					}
				}).then(res => {
					// console.log(res, 'GetHostList3');
					this.HostList4 = res.data.records
				})
			},
			gotoSearch(){
				uni.navigateTo({
					url:"/pages/search/search"
				})
			}
		}
	}
</script>

<style lang="scss">
	.top {
		width: 100%;
		height: 210px;
		position: relative;
		transition: all 1s;

		.swipering {
			width: 93%;
			position: absolute;
			left: 10px;
			top: 60px;
			border-radius: 20px;

			.imgs {
				width: 100%;
				height: 100%;
				border-radius: 20px 20px;
			}
		}
	}


	.ipt-box {
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: space-around;
		align-items: center;

		.ipt-top {
			width: 98%;
			height: 30px;
			border: 0;
			border-radius: 20px;
			background-color: #fff;
			text-align: center;
			font-size: 14px;
		}
	}


	.NavList {
		width: 100%;
		height: 100px;
		display: flex;
		flex-wrap: wrap;
		margin-top: 10px;

		.NavList-name {
			width: 20%;
			height: 35px;
			background-color: #f8f9fb;
			border-radius: 10px;
			text-align: center;
			line-height: 30px;
			margin: 5px 8px;
			font-size: 13px;
		}
	}

	.host {
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		p {
			font-size: 20px;
			padding-left: 10px;
		}

		span {
			font-size: 14px;
			color: #ccc;
			padding-right: 10px;
		}
	}

	.scrollTest {
		width: 200vw;
		overflow-x: scroll;
		// 隐藏滚动条
		&::-webkit-scrollbar {
			display: none;
		}
		.box {
			width: 50%;
			// overflow-x: scroll;
			white-space: nowrap;
			display: inline-block;
			width: 270px;
			height: 80px;
			margin-left: 15px;
			box-sizing: border-box;
			.list {
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: relative;
			}

			.time {
				width: 60px;
				text-align: center;
				display: inline-block;
				position: absolute;
				top: 55px;
				left: 60px;
				color: #fff;
				font-size: 12px;
				background-color: #a19f9d;
				border-radius: 10px;
			}

			.HostLImg {
				width: 120px;
				height: 70px;
				border-radius: 5px;
				margin: 0 5px;
			}

			p {
				font-size: 15px;
				font-weight: 600;
				overflow: hidden;
			}

			.name {
				font-size: 14px;
				color: #ccc;
			}

			.price {
				font-size: 13px;
				color: orange;
				display: flex;

				.preson {
					font-size: 12px;
					color: #000;
				}
			}

		}
	}


	.Host2 {
		height: 200px;
		overflow-x: scroll;
		white-space: nowrap;

		// 隐藏滚动条
		&::-webkit-scrollbar {
			display: none;
		}

		.box2 {
			display: inline-block;
			width: 150px;
			height: 100%;
			margin-left: 10px;
			box-sizing: border-box;
		}

		.list2 {
			width: 100%;

			.time {
				width: 60px;
				text-align: center;
				display: inline-block;
				color: #fff;
				font-size: 12px;
				background-color: #a19f9d;
				border-radius: 10px;
			}

			.HostLImg {
				width: 130px;
				height: 80px;
				border-radius: 5px;
				margin: 0 5px;
			}

			p {
				font-size: 15px;
				font-weight: 600;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.name {
				font-size: 14px;
				color: #ccc;
			}

			.price {
				font-size: 13px;
				color: orange;
				display: flex;

				.preson {
					font-size: 12px;
					color: #000;
				}
			}
		}
	}

	.list4 {
		width: 100%;
		height: 100px;
		display: flex;
		position: relative;

		.time {
			width: 60px;
			text-align: center;
			display: inline-block;
			position: absolute;
			top: 60px;
			left: 66px;
			color: #fff;
			font-size: 12px;
			background-color: #a19f9d;
			border-radius: 10px;
		}

		.HostLImg {
			width: 130px;
			height: 80px;
			border-radius: 5px;
			margin: 0 5px;
		}

		p {
			font-size: 15px;
			font-weight: 600;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.name {
			font-size: 14px;
			color: #ccc;
		}

		.price {
			font-size: 13px;
			color: orange;
			display: flex;

			.preson {
				font-size: 12px;
				color: #000;
			}
		}
	}
</style>