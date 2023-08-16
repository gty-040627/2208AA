<template>
	<view>
		<!-- 头部搜索 -->
		<div class="ipt-box">
			<input type="text" placeholder="搜索你想要的内容" class="ipt-top">
		</div>
		<!-- 头部 navlisy -->
		<!-- 	<scroll-view scroll-x="true" class="scroll-view">
			<view v-for="item,index in navListL" :key="item.id" class="scroll-item" :id="'item'+index"
				:class="{active:index===activeindex}" @click="toggleclass(item.id)">
				{{item.name}}
			</view>
		</scroll-view> -->


		<van-tabs activeindex="activeindex">
			<van-tab title="推荐">
				<view class="content" v-for="item in AList1" :key="item.id">
					<div class="texting">
						<p class="title">{{item.title}}</p>
						<p class="summary">{{item.summary}}</p>
						<p class="conentsing"><span class="name">{{item.nickName}}</span> · <span>{{item.updateDate}}</span> <span>
								·
								{{item.viewCount}}</span>赞 </p>
					</div>
					<div class="boxImg">
						<image :src="item.imageUrl" mode="widthFix"
							style="width: 100px;height: 250px; border-radius: 5px; margin-right: 10px;margin-top: 20px;"></image>
					</div>
				</view>
			</van-tab>
			<van-tab title="Java">
				<view class="content" v-for="item in AList2" :key="item.id">
					<div class="texting">
						<p class="title">{{item.title}}</p>
						<p class="summary">{{item.summary}}</p>
						<p class="conentsing"><span class="name">{{item.nickName}}</span> · <span>{{item.updateDate}}</span> <span>
								·
								{{item.viewCount}}</span>赞 </p>
					</div>
					<div class="boxImg">
						<image :src="item.imageUrl" mode="widthFix"
							style="width: 100px;height: 250px; border-radius: 5px; margin-right: 10px;margin-top: 20px;"></image>
					</div>
				</view>
			</van-tab>
			<van-tab title="前端">
				<view class="content" v-for="item in AList3" :key="item.id">
					<div class="texting">
						<p class="title">{{item.title}}</p>
						<p class="summary">{{item.summary}}</p>
						<p class="conentsing"><span class="name">{{item.nickName}}</span> · <span>{{item.updateDate}}</span> <span>
								·
								{{item.viewCount}}</span>赞 </p>
					</div>
					<div class="boxImg">
						<image :src="item.imageUrl" mode="widthFix"
							style="width: 100px;height: 250px; border-radius: 5px; margin-right: 10px;margin-top: 20px;"></image>
					</div>
				</view>
			</van-tab>
			<van-tab title="云计算">
				<view class="content" v-for="item in AList4" :key="item.id">
					<div class="texting">
						<p class="title">{{item.title}}</p>
						<p class="summary">{{item.summary}}</p>
						<p class="conentsing"><span class="name">{{item.nickName}}</span> · <span>{{item.updateDate}}</span> <span>
								·
								{{item.viewCount}}</span>赞 </p>
					</div>
					<div class="boxImg">
						<image :src="item.imageUrl" mode="widthFix"
							style="width: 100px;height: 250px; border-radius: 5px; margin-right: 10px;margin-top: 20px;"></image>
					</div>
				</view>
			</van-tab>
			<van-tab title="运维">
				<view class="content" v-for="item in AList5" :key="item.id">
					<div class="texting">
						<p class="title">{{item.title}}</p>
						<p class="summary">{{item.summary}}</p>
						<p class="conentsing"><span class="name">{{item.nickName}}</span> · <span>{{item.updateDate}}</span> <span>
								·
								{{item.viewCount}}</span>赞 </p>
					</div>
					<div class="boxImg">
						<image :src="item.imageUrl" mode="widthFix"
							style="width: 100px;height: 250px; border-radius: 5px; margin-right: 10px;margin-top: 20px;"></image>
					</div>
				</view>
			</van-tab>
			<van-tab title="测试">
				<view class="content" v-for="item in AList5" :key="item.id">
					<div class="texting">
						<p class="title">{{item.title}}</p>
						<p class="summary">{{item.summary}}</p>
						<p class="conentsing"><span class="name">{{item.nickName}}</span> · <span>{{item.updateDate}}</span> <span>
								·
								{{item.viewCount}}</span>赞 </p>
					</div>
					<div class="boxImg">
						<image :src="item.imageUrl" mode="widthFix"
							style="width: 100px;height: 250px; border-radius: 5px; margin-right: 10px;margin-top: 20px;"></image>
					</div>
				</view>
			</van-tab>
			<van-tab title="UI设计">
				<view class="content" v-for="item in AList2" :key="item.id">
					<div class="texting">
						<p class="title">{{item.title}}</p>
						<p class="summary">{{item.summary}}</p>
						<p class="conentsing"><span class="name">{{item.nickName}}</span> · <span>{{item.updateDate}}</span> <span>
								·
								{{item.viewCount}}</span>赞 </p>
					</div>
					<div class="boxImg">
						<image :src="item.imageUrl" mode="widthFix"
							style="width: 100px;height: 250px; border-radius: 5px; margin-right: 10px;margin-top: 20px;"></image>
					</div>
				</view>
			</van-tab>
			<van-tab title="人工智能">
				<view class="content" v-for="item in AList3" :key="item.id">
					<div class="texting">
						<p class="title">{{item.title}}</p>
						<p class="summary">{{item.summary}}</p>
						<p class="conentsing"><span class="name">{{item.nickName}}</span> · <span>{{item.updateDate}}</span> <span>
								·
								{{item.viewCount}}</span>赞 </p>
					</div>
					<div class="boxImg">
						<image :src="item.imageUrl" mode="widthFix"
							style="width: 100px;height: 250px; border-radius: 5px; margin-right: 10px;margin-top: 20px;"></image>
					</div>
				</view>
			</van-tab>
			<van-tab title="大数据">
				<view class="content" v-for="item in AList5" :key="item.id">
					<div class="texting">
						<p class="title">{{item.title}}</p>
						<p class="summary">{{item.summary}}</p>
						<p class="conentsing"><span class="name">{{item.nickName}}</span> · <span>{{item.updateDate}}</span> <span>
								·
								{{item.viewCount}}</span>赞 </p>
					</div>
					<div class="boxImg">
						<image :src="item.imageUrl" mode="widthFix"
							style="width: 100px;height: 250px; border-radius: 5px; margin-right: 10px;margin-top: 20px;"></image>
					</div>
				</view>
			</van-tab>
			<van-tab title="Python">
				<view class="content" v-for="item in AList3" :key="item.id">
					<div class="texting">
						<p class="title">{{item.title}}</p>
						<p class="summary">{{item.summary}}</p>
						<p class="conentsing"><span class="name">{{item.nickName}}</span> · <span>{{item.updateDate}}</span> <span>
								·
								{{item.viewCount}}</span>赞 </p>
					</div>
					<div class="boxImg">
						<image :src="item.imageUrl" mode="widthFix"
							style="width: 100px;height: 250px; border-radius: 5px; margin-right: 10px;margin-top: 20px;"></image>
					</div>
				</view>
			</van-tab>
		</van-tabs>




	</view>
</template>

<script>
	import List1 from "../../components/List1/List1.vue"
	import http from "../../api/http.js"
	export default {
		data() {
			return {
				activeindex: 0,
				navListL: {},
				content: '',
				AList1: [],
				AList2: [],
				AList3: [],
				AList4: [],
				AList5: [],
				AList6: [],
				current: 1,
			};
		},
		onLoad() {
			this.GetNva();
			// 页面默认显示的是list列表中第一条数据
			this.content = this.navListL[0]
			this.GetAList()
			this.GetAlist2()
			this.GetAlist3()
			this.GetAlist4()
			this.GetAlist5()
			this.GetAlist6()
		},
		methods: {
			//推荐内容 接口
			GetAList() {
				http({
					url: "/article/api/article/search",
					method: "POST",
					data: {
						current: this.current,
						size: 20
					}
				}).then(res => {
					console.log(res, '推荐');
					this.AList1 = [...this.AList1, ...res.data.records]
				})
			},
			GetAlist2() {
				http({
					url: "/article/api/article/search",
					method: "POST",
					data: {
						categoryId: 1,
						current: this.current,
						size: 20
					}
				}).then(res => {
					// console.log(res, 'java');
					this.AList2 = [...this.AList2, ...res.data.records]
				})
			},
			GetAlist3() {
				http({
					url: "/article/api/article/search",
					method: "POST",
					data: {
						categoryId: 2,
						current: this.current,
						size: 20
					}
				}).then(res => {
					// console.log(res, 'java');
					this.AList3 = [...this.AList3, ...res.data.records]
				})
			},
			GetAlist4() {
				http({
					url: "/article/api/article/search",
					method: "POST",
					data: {
						categoryId: 3,
						current: this.current,
						size: 20
					}
				}).then(res => {
					// console.log(res, 'java');
					this.AList4 = [...this.AList4, ...res.data.records]
				})
			},
			GetAlist5() {
				http({
					url: "/article/api/article/search",
					method: "POST",
					data: {
						categoryId: 4,
						current: this.current,
						size: 20
					}
				}).then(res => {
					// console.log(res, 'java');
					this.AList5 = [...this.AList5, ...res.data.records]
				})
			},
			GetAlist6() {
				http({
					url: "/article/api/article/search",
					method: "POST",
					data: {
						categoryId: 5,
						current: this.current,
						size: 20
					}
				}).then(res => {
					// console.log(res, 'java');
					this.AList6 = [...this.AList6, ...res.data.records]
				})
			},
			// nav 接口请求  
			GetNva() {
				//navlist接口
				http({
					url: "/article/api/category/label/list"
				}).then(res => {
					// console.log(res, 'top-list');
					this.navListL = res.data
					for (let i = 0; i < this.navListL.length; i++) {
						const obj = this.navListL[i];
						// console.log(obj.id, 'obj.id');
					}
				})
			},
		},
		onReachBottom() {
			this.current += 1
			this.GetAList()
			this.GetAList2()
			this.GetAList3()
			this.GetAList4()
			this.GetAList5()
			this.GetAList6()
		},
		components: {
			List1
		}

	}
</script>

<style lang="scss">
	.ipt-box {
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #345dc2;

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




	.scroll-view {
		height: 100rpx;
		width: 100%;
		line-height: 100rpx;
		white-space: nowrap;
		border-bottom: 1px solid #aea7a0;
	}

	.scroll-item {
		height: 40px !important;
		display: inline-block;
		padding: 0 40rpx;
	}

	.active {
		color: steelblue;
		border-bottom: 2px solid blue;
	}

	.content {
		width: 100%;
		height: 100px;
		border-bottom: 1px solid #f7f7f7;
		display: flex;
		justify-content: space-between;

		.texting {
			width: 65%;

			.summary {
				display: block;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				color: #aea7a0;
				font-size: 13px;
				padding-left: 5px;
			}

			.title {
				font-weight: 600;
				padding: 5px;
			}

			.conentsing {
				height: 30px;
				line-height: 20px;
				font-size: 12px;
				display: flex;
				align-items: center;
				padding-left: 5px;
				color: #aea7a0;

				.name {
					color: #000;
				}
			}
		}
	}


	.van-tabs__line {
		background-color: var(--tabs-bottom-bar-color, #345dc2) !important;
	}
</style>