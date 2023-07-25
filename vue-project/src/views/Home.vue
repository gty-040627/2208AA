<template>
	<div class="home">
		<router-view />
		<van-tabbar route>
			<van-tabbar-item replace to="/about" icon="apps-o">首页</van-tabbar-item>
			<van-tabbar-item replace to="/article" icon="setting-o">健康百科</van-tabbar-item>
			<van-tabbar-item replace to="/notify" icon="search">消息中心</van-tabbar-item>
            <van-tabbar-item replace to="/my" icon="home-o">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped></style>
