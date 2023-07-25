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

		<p>{{ list.firstName }} -- {{ list.lastName }}</p>
		<hr />
		{{ hope }}
		<input type="text" v-model="hope">
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive ,computed,watch} from 'vue';
export default defineComponent({
	
	setup() {
		const list = reactive({
			name: '高甜媛',
			job: 'web前端开发工程师',
			age: 18,
			money: 18,
			firstName:'高',
			lastName:'甜媛'
		});
		const school = ref('集运教育');
		const hope = ref('想去看海');
		

		// //计算属性
		//简写
		let fullName = computed(()=>{
			return list.firstName + '-' + list.lastName
		});
		//完整版
		// let fullName = computed({
		// 	get(){
		// 		return list.firstName + '-' + list.lastName
		// 	},
		// 	set(value){
		// 		const nameArr = value.split(' - ')
		// 		list.firstName= nameArr[0]
		// 		list.lastName= nameArr[1]
		// 	}
		// })

        //监听属性
		// watch(hope,(newValue,oldValue)=>{
		// 	console.log('变化了',newValue,oldValue);
		// },{immediate:true})
		// 情况三
		// watch(list,(newValue,oldValue)=>{
		// 	console.log('list变化了',newValue,oldValue);
		// },{immediate:true,deep:true})
		// 情况四
		// watch(()=>list.job,(newValue,oldValue)=>{
		// 	console.log('list的job变化了',newValue,oldValue);
		// },{immediate:true,deep:true})
		// 情况五
		watch([()=>list.job,()=>list.money],(newValue,oldValue)=>{
			console.log('list的job变化了',newValue,oldValue);
		},{immediate:true,deep:true})



		

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
			school,
			fullName,
			hope
		};
	},

	
	
});
</script>
