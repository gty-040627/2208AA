<template>
	<div class="about">
		<van-nav-bar
			title="账户总览"
			right-text="退出 "
			@click-right="onClickRight"
		/>
		<div class="list" v-for="item in list" :key="item.id">
			<div><img src="../../public/bank.png" alt="" /></div>
			<div>
				<p class="title">中国建设银行(
					<span v-if="item.id ==1 ">{{ OneNum }}</span>
					<span v-if="item.id ==2 ">{{ TwoNum }}</span>
					<span v-if="item.id ==3 ">{{ TreeNum }}</span>
					)</p>
				<p v-if="item.grade == 1" class="ka">
					一类卡
					<span class="lan">正常</span>
				</p>
				<p v-if="item.grade == 2" class="ka">
					二类卡
					<span class="lan">正常</span>
				</p>
				<p class="money">可用余额</p>
				<p class="qian">{{ item.balance }}.00</p>
			</div>
			<div class="btn">
				<span @click="getRecord(item.id)">明细</span>
				<span @click="gotoTransferAccount(item)" >转账</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, reactive, toRefs } from 'vue';
	import { useStore } from 'vuex';
	import { useRouter, useRoute } from 'vue-router';
	import { QueryList,QuerygetRecord } from '../utils/api';
	import * as TS from '../utils/defind';
	const store = useStore();
	const router = useRouter();
	const route = useRoute();
	const data = reactive({});
	//退出按钮
	const onClickRight = () => {
		localStorage.removeItem('token');
		router.push('/login');
	};
	//数据渲染
	const list = ref();
	const GetList = () => {
		QueryList().then((res) => {
			// console.log(res, 'QueryList');
			list.value = res.data.data;
		});
	};
	GetList();

	//进入转账页面
	const gotoTransferAccount = (item:any) => {
		console.log(item,'item');
		// let items = JSON.stringify(item)
		// router.push('/TransferAccount');
		router.push({path:'/TransferAccount',query:item})
	};
	//银行卡后四位截取
	var One = '622700129876789001';
	var Two = '6227000011112226887';
	var Tree = '6227000029291102999';
	var OneNum = One.substring(One.length - 4, One.length);
	var TwoNum = Two.substring(Two.length - 4, Two.length);
	var TreeNum = Tree.substring(Tree.length - 4, Tree.length);
	// console.log(OneNum);
	// console.log(TwoNum);
	// console.log(TreeNum);

	//明细
	const getRecord=(id:any)=>{
		router.push({path:'/Record',query:{id}})
	}
</script>

<style lang="scss" scoped>
	.about {
		width: 100vw;
		height: 100vh;
	}
	.list {
		width: 90%;
		height: 350px;
		background-color: #f6fafd;
		margin: 30px auto;
		border-radius: 10px;
		border: 1px solid #cccccc8e;
		display: flex;
		align-items: center;
		position: relative;
	}
	.ka {
		font-size: 30px;
		color: #9f9595;
		position: absolute;
		top: 90px;
		padding-left: 30px;
	}
	.money {
		font-size: 30px;
		color: #9f9595;
		position: absolute;
		bottom: 140px;
		padding-left: 30px;
	}
	.title {
		position: absolute;
		top: 20px;
		padding-left: 30px;
	}
	.qian {
		position: absolute;
		top: 210px;
		padding-left: 30px;
	}
	.lan {
		display: inline-block;
		width: 80px;
		height: 50px;
		background-color: #e3ecfb;
		color: #7196d7;
		border-radius: 10px;
		text-align: center;
		line-height: 50px;
	}
	.btn {
		width: 100%;
		height: 80px;
		background-color: #fff;
		position: absolute;
		bottom: 0;
		font-size: 36px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		color: #003a90;
	}
</style>
