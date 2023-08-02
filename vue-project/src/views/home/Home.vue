<template>
	<div class="home">
		<router-view />
		<van-tabbar route>
			<van-tabbar-item replace to="/home/about" icon="apps-o">首页</van-tabbar-item>
			<van-tabbar-item replace to="/home/article" icon="setting-o">健康百科</van-tabbar-item>
			<van-tabbar-item replace to="/home/notify" icon="search">消息中心</van-tabbar-item>
            <van-tabbar-item replace to="/home/my" icon="home-o">我的</van-tabbar-item>
		</van-tabbar>
	</div> 
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped></style>
