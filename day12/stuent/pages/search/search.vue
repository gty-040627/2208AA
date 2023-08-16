<template>
	<view>
		<div class="top">
			<van-icon name="arrow-left" />
			<input class="ipt" type="text" v-model="keyword" @confirm="confirmHandler" placeholder="请输入关键词">
			<span>取消</span>
		</div>

		<div class="title">热门推荐</div>
		<div class="list">
			<span v-for="item in life" @click='OnTitle(item.title)'>{{item.title}}</span>
		</div>

		<div class="title">历史记录 <span @click="clearSearchRecords">清空</span></div>

		<ul class="Ulll">
			<li v-for="record in searchRecords" :key="record">{{ record }}</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				life:[ 
					{title:'Java'},
					{title:'Python'},
					{title:'Vue.js'},
					{title:'React'},
					{title:'SpringBoot'},
					{title:'SpringCloud'},
				],
				keyword: '',
				searchRecords: []
			};
		},
		methods: {
			OnTitle(title){
				 // console.log(title,'title');
				 this.searchRecords.unshift(title)
				 uni.setStorageSync('searchRecords', title);
				 this.keyword =''
				 uni.navigateTo({
				 	url:"/pages/search2/search2?title="+ title
				 })
			},
			confirmHandler(e) {
				// 获取输入的关键词
				const keyword = this.keyword.trim();
				if (keyword !== '') {
					// 更新搜索记录数组
					this.searchRecords.unshift(keyword);
					// 保存搜索记录到本地存储
					uni.setStorageSync('searchRecords', this.searchRecords);
					// 清空搜索框
					this.keyword = '';
					
					uni.navigateTo({
						url:"/pages/search2/search2?title="+ keyword
					})
				}
			},
			//获取本笃存储数据
			getSearchRecords() {
				// 从本地存储中获取搜索记录数组
				const records = uni.getStorageSync('searchRecords');
				if (Array.isArray(records)) {
					this.searchRecords = records;
				}
			},
			clearSearchRecords() {
				// 清空搜索记录数组和本地存储
				this.searchRecords = [];
				uni.removeStorageSync('searchRecords');
			}
		},
		mounted() {
			// 页面加载时，获取搜索记录
			this.getSearchRecords();
		},
	}
</script>

<style lang="scss">
	.top {
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 10px;

		.ipt {
			width: 220px;
			height: 30px;
			border-radius: 15px;
			background-color: #f3f4f4;
			font-size: 14px;
			padding-left: 20px;
		}

		.van-icon {
			font-size: 20px;
		}
	}

	.title {
		padding: 5px 15px;
		display: flex;
		justify-content: space-between;

		span {
			color: #999;
		}
	}

	.list {
		width: 100%;
		height: 100px;
		display: flex;
		flex-wrap: wrap;
		margin-left: 10px;

		span {
			margin: 5px 10px;
			display: inline-block;
			height: 15px;
			border-radius: 5px;
			border: 1px solid #666;
			font-size: 13px;
			padding: 5px;
			color: #999;
			text-align: center;
			line-height: 15px;
		}
	}
	
	.Ulll{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin-left: 10px;
		li{
			margin: 5px 10px;
			display: inline-block;
			height: 15px;
			border-radius: 5px;
			border: 1px solid #666;
			font-size: 13px;
			padding: 5px;
			color: #999;
			text-align: center;
			line-height: 15px;
		}
	}
</style>