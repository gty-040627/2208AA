<template>
	<div class="Notify">
		NotifyView
		<br />
		<h2>pinia使用</h2>
		<p>自增：{{ counterStore.count }}</p>
		<p>双倍增加：{{ counterStore.doubleCount }}</p>
		<button @click="counterStore.increment()">自增</button>
	</div>
</template>

<script setup lang="ts">
	import { ref, reactive, toRefs } from 'vue';
	import { useRouter, useRoute } from 'vue-router';
	import useCounterStore from '../stores/counter';
	const router = useRouter();
	const route = useRoute();
	const data = reactive({});

	//声明pinia函数
	const counterStore = useCounterStore();
</script>

<style lang="scss" scoped></style>
