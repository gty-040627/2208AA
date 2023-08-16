<template>
	<view>
		1234567
		<!-- <view  class="content" v-for="item in AList3" :key="item.id" >
			<div class="texting">
				<p class="title">{{item.title}}</p>
				<p class="summary">{{item.summary}}</p>
				<p class="conentsing"><span class="name">{{item.nickName}}</span> · <span>{{item.updateDate}}</span> <span> ·
						{{item.viewCount}}</span>赞 </p>
			</div>
			<div class="boxImg">
				<image :src="item.imageUrl" mode="widthFix"
					style="width: 100px;height: 250px; border-radius: 5px; margin-right: 10px;margin-top: 20px;"></image>
			</div>
		</view> -->
	</view>
</template>

<script>
	import http from "../../api/http.js"
	export default {
		name: "List1",
		data() {
			return {
				AList3: {},
				current: 1
			};
		},
		onLoad() {
			http({
				url: "/article/api/article/search",
				method: "POST",
				data: {
					categoryId: 2,
					current: this.current,
					size: 20
				}
			}).then(res => {
				console.log(res, '人工智能');
				// this.AList3 = [...this.AList3, ...res.data.records]
			})	
		}
	}
</script>

<style lang="scss">
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
	
</style>