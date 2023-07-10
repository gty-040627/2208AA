<template>
	<div class="home">
		<!-- v3 -->
		<p>{{ list.name }}</p>
		<p>{{ list.age }}岁</p>
		<p>{{ list.job }}</p>
		<p>{{ list.money }}k</p>
		<p>{{ school }}</p>
		<button @click="HandleChangeMoney">改变v3的工资</button>
		<button @click="HandleChangeJob">改变v3的工作</button>
    <hr />
	</div>
</template>

<script lang="ts">
	import { defineComponent ,ref,reactive} from 'vue';
	export default defineComponent({
		setup() {
			const list = reactive({
				name: '高甜媛',
				job: 'web前端开发工程师',
				age: 18,
				money: 18,
			});
			const school = ref('集运教育')
      
			const HandleChangeMoney = () => {
				list.money = 20; 
			};
			const HandleChangeJob = () => {
				list.job = '短视频'; 
			};
			return {
				list,
				HandleChangeMoney,
                 HandleChangeJob,
		       school
			};
		},
	});
</script>
