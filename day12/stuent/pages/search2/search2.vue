<template>
	<view>
		<div class="top">
			<van-icon name="arrow-left" />
			<input class="ipt" type="text" v-model="keyword" @confirm="confirmHandler" placeholder="请输入关键词">
			<span>取消</span>
		</div>
		<!-- tab栏 -->
		<van-tabs active="a">
			<van-dropdown-menu active-color="#1989fa">
				<van-dropdown-item :value="value1" :options="option1" />
				<van-dropdown-item :value="value2" :options="option2" />
				<van-dropdown-item :value="value3" :options="option3" />
			</van-dropdown-menu>
			<van-tab title="课程" name="a">
				<div v-for="item in List" :key="item.id"> 
					{{item.title}}
				</div>
			</van-tab>
			<van-tab title="文章" name="b">内容 2</van-tab>
			<van-tab title="问答" name="c">内容 3</van-tab>
		</van-tabs>
		<!-- 下拉框 -->


	</view>
</template>

<script>
	import http from "../../api/http.js"
	export default {
		data() {
			return {
				keyword: '',
				List:[],
				option1: [{
						text: '综合排序',
						value: 0
					},
					{
						text: '最新排序',
						value: 1
					},
					{
						text: '热门排序',
						value: 2
					},
				],
				option2: [{
						text: '全部课程',
						value: 'a'
					},
					{
						text: '付费课程',
						value: 'b'
					},
					{
						text: '免费课程',
						value: 'c'
					},
				],
				option3: [{
						text: '全部分类',
						value: 'a'
					},
					{
						text: 'JAava',
						value: 'b'
					},
					{
						text: '前端',
						value: 'c'
					},
					{
						text: '云计算',
						value: 'd'
					},
					{
						text: '运维',
						value: 'e'
					},
					{
						text: '测试',
						value: 'f'
					},
					{
						text: 'UI设计',
						value: 'g'
					},
					{
						text: '人工智能',
						value: 'w'
					},
					{
						text: '大数据',
						value: 'w'
					},
					{
						text: 'Python',
						value: 'o'
					},
				],
				value1: 0,
				value2: 'a',
				value3: 'a',
			};
		},
		methods: {
			GetLabelList() {
				http({
					url: "/article/api/category/label/list",
				}).then(res => {
					// console.log(res, 'GetLabelList');
					this.option3 = res.data.name
				})
			},
			GetList() {
				http({
					url: "/course/api/course/search",
					method: "POST",
					data: {
						categoryId: null,
						content: this.keyword,
						current: 1,
						isFree: null,
						labelId: null,
						size: 10,
						sort: null
					}
				}).then(res => {
					console.log(res, 'GetList');
					this.List = res.data.records
				})
			}
		},
		onLoad(option) {
			//接收搜索页面的关键词
			console.log(option.title, 'option.title');
			this.keyword = option.title
			this.GetLabelList()
			this.GetList()
		}
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

	.van-tabs__line {
		background-color: var(--tabs-bottom-bar-color, #345dc2) !important;
	}
</style>