<template>
	<div class="home">
		<div class="top">
			<van-icon name="friends-o" class="user" />
			<span class="title">網易</span>
			<span class="emilt">
				<van-icon name="comment-o" />
				邮箱
			</span>
		</div>
		<div class="nav">
			<ul>
				<li class="active">要闻</li>
				<li>推荐</li>
				<li>原创</li>
				<li>热点</li>
			</ul>
		</div>
		<div class="nav2">
			<ul v-for="(item, index) in data" :key="index">
				<li>{{ item }}</li>
			</ul>
		</div>
		<p class="weight">今日要闻</p>
		<div class="text">
			<p>习近平再发团结抗疫"中国强音"</p>
			<span>央视网 1小时前 879跟贴贴</span>
		</div>
		<div class="text">
			<p>这些群众关心事，总书记再次聚焦</p>
			<span>央视网 1小时前 166跟贴</span>
		</div>
		<div class="text">
			<p>超6000万次围观!最高检带新媒体大咖看"浙”里</p>
		</div>
		<div class="big">
			<img src="../../public/user.png" alt="" />
		</div>
    <div class="btn">
			<div class="text">
				<p>甘肃马拉松已致20人遇难1人失联 白银市长曾鸣枪开幕</p>
				<span>上游新闻 2287跟贴</span>
			</div>
      <div>
        <img class="small" src="../../public/111.png" alt="">
      </div>
		</div>
		<div class="btn">
			<div class="text">
				<p>男子一人保护了52户家庭 有邻居偷偷帮他交1年物业费</p>
				<span>杭州网 1.9万跟贴</span>
			</div>
      <div>
        <img class="small2" src="../../public/222.png" alt="">
      </div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, reactive, toRefs } from 'vue';
	import { useStore } from 'vuex';
	import { useRouter, useRoute } from 'vue-router';
	const store = useStore();
	const router = useRouter();
	const route = useRoute();
	const data = ref([
		'新闻',
		'抗议',
		'娱乐',
		'体育',
		'财经',
		'图片',
		'汽车',
		'军事',
		'直播',
		'房产',
	]);
</script>

<style lang="scss" scoped>
	.home {
		width: 100vw;
		height: 100vh;
		.top {
			width: 100%;
			height: 3rem;
			background-color: red;
			color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.user {
				padding-left: 1rem;
				font-size: 1.5rem;
			}
			.emilt {
				padding-right: 1rem;
				display: flex;
				align-items: center;
				.van-icon {
					font-size: 1.5rem;
				}
			}
			.title {
				font-size: 1.5rem;
			}
		}
		.nav {
			width: 100%;
			height: 3rem;
			background-color: #fff;
			line-height: 3rem;
			ul {
				font-size: 1.2rem;
				display: flex;
				justify-content: space-around;
				align-items: center;
			}
			.active {
				color: red;
				border-bottom: 0.1rem solid red;
			}
		}
		.nav2 {
			width: 100%;
			height: 5rem;
			background-color: #cccccc53;
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			li {
				font-size: 1rem;
				padding: 0.7rem 1.2rem;
			}
		}
		.weight {
			font-weight: 700;
			font-size: 1.2rem;
			padding-left: 0.5rem;
		}
	}
  .text{
    height: 3.5rem;
    p{
      font-size: 1.2rem;
      padding-left: 0.2rem;
    }
    span{
      color: #ccc;
      font-size: 1rem;
      padding-left: 0.2rem;
    }
  }
  .big{
    width: 100%;
    height: 13rem;
    img{
      width: 100%;
      height: 100%;
    }
  }

  .btn{
    display: flex;
    justify-content: space-between;
    height: 6rem;
    .small{
      width: 7rem;
      height:4rem;
      margin: 0.5rem;
    }
    .small2{
      width: 8rem;
      height: 4rem;
      margin: 0.5rem;
    }
  }
</style>
