<template>
	<div class="my">
		<div class="my-top">
			<div><img src="../../public/avatar3.jpg" alt="" class="monkey" /></div>
			<div>
				<p>2222</p>
				<van-icon name="edit" />
			</div>
		</div>
		<div class="nav">
			<div>
				<p class="num">0</p>
				<span class="name">收藏</span>
			</div>
			<div>
				<p class="num">34</p>
				<span class="name">关注</span>
			</div>
			<div>
				<p class="num">0</p>
				<span class="name">积分</span>
			</div>
			<div>
				<p class="num">0</p>
				<span class="name">优惠卷</span>
			</div>
		</div>

		<div class="nav2">
			<div class="nav2-top">
				<h4>药品订单</h4>
				<span class="ccc">全部订单 ></span>
			</div>
			<img src="../../public/222.png" alt="" class="nav-img" />
		</div>
		<div class="nav3">
			<h4>快捷工具</h4>
			<div class="nav3-item">
				<div>
					<van-icon name="send-gift-o" />
					<span>我的问诊</span>
				</div>
				<div class="xiaoyu">></div>
			</div>
			<div class="nav3-item">
				<div>
					<van-icon name="coupon-o" />
					<span>我的处方</span>
				</div>
				<div class="xiaoyu">></div>
			</div>
			<div class="nav3-item">
				<div>
					<van-icon name="friends-o" />
					<span>家庭档案</span>
				</div>
				<div class="xiaoyu">></div>
			</div>
			<div class="nav3-item">
				<div>
					<van-icon name="send-gift-o" />
					<span>地址管理</span>
				</div>
				<div class="xiaoyu">></div>
			</div>
			<div class="nav3-item">
				<div>
					<van-icon name="edit" />
					<span>我的评价</span>
				</div>
				<div class="xiaoyu">></div>
			</div>
			<div class="nav3-item">
				<div>
					<van-icon name="service-o" />
					<span>官方客服</span>
				</div>
				<div class="xiaoyu">></div>
			</div>
			<div class="nav3-item">
				<div>
					<van-icon name="send-gift-o" />
					<span>客服</span>
				</div>
				<div class="xiaoyu">></div>
			</div>
		</div>
		<div class="over" @click="GotoLogin">退出登录</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, reactive, toRefs } from 'vue';
	import { useRouter, useRoute } from 'vue-router';
	import { showConfirmDialog } from 'vant';
	const router = useRouter();
	const route = useRoute();

  //退出登录
	const GotoLogin = () => {
		showConfirmDialog({
			title: '温馨提示',
			message:
				'你确定要退出优医问诊吗？'
		})
			.then(() => {
				localStorage.removeItem('token')
        router.push('/login')
			})
			.catch(() => {
				// on cancel
			});
	};
</script>

<style scoped lang="scss">
	.my {
		width: 100vw;
		height: 100vh;
		background: linear-gradient(to top, #fefefd, #fff, #f3efef, #aedfdb);
	}
	.monkey {
		width: 70px;
		height: 70px;
		border-radius: 50px;
		margin: 30px;
	}
	.my-top {
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
		padding-top: 20px;
	}
	.nav {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
	.num {
		padding-left: 7px;
	}
	.name {
		color: #7d7878;
		font-size: 14px;
	}
	.nav2 {
		width: 95%;
		margin: 20px auto;
		height: 120px;
		background-color: #fff;
		border-radius: 5px;
	}
	h4 {
		padding: 10px;
	}
	.nav2-top {
		width: 100%;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.nav-img {
		width: 95%;
		height: 80px;
		margin: 10px 10px;
	}
	.ccc {
		color: #aeaaaa;
		padding-right: 20px;
		font-size: 15px;
	}
	.nav3 {
		width: 95%;
		margin: 20px auto;
		background-color: #fff;
		border-radius: 5px;
	}
	.nav3-item {
		height: 55px;
		line-height: 55px;
		display: flex;
		justify-content: space-between;
		padding: 0 20px;
	}
	.nav3-item span {
		font-size: 14px;
		padding-left: 10px;
	}
	.xiaoyu {
		color: #868383;
		font-size: 22px;
	}
	.over {
		width: 100%;
		height: 100px;
		text-align: center;
		font-size: 14px;
		color: red;
	}
</style>
