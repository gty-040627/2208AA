<template>
	<div class="Record">
		<van-nav-bar title="转账记录" left-arrow @click-left="onClickLeft" />
		<div v-for="item in list" :key="item.id" class="list">
			<div>
				<span class="name" v-if="item.receiverNumber">
					转账给{{ item.receiver }}(
					{{ item.receiverNumber.slice(0, 4) }} ****{{
						item.receiverNumber.slice(
							item.receiverNumber.length - 4,
							item.receiverNumber.length,
						)
					}}
					)
				</span>
				<span class="name" v-else>
					转账--来自 {{ item.payer }} (
					{{ item.payerNumber.slice(0, 4) }} ****{{
						item.payerNumber.slice(
							item.payerNumber.length - 4,
							item.payerNumber.length,
						)
					}}
					)
				</span>
			
				<br />
				<span class="time">{{ Timeing(item.createTime) }}</span>
			</div>
			<div class="tow">
					<span :class="item.payerNumber ? 'orange' : 'green'">
					{{ item.payerNumber ? '+' : '-' }} {{ item.amount }}
				</span>
				<br />
				<span class="title">{{ item.remark }}</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, reactive, toRefs } from 'vue';
	import { useStore } from 'vuex';
	import { useRouter, useRoute } from 'vue-router';
	import { QuerygetRecord } from '../utils/api';
	import moment from 'moment';
	const store = useStore();
	const router = useRouter();
	const route = useRoute();
	const data = reactive({});
	const onClickLeft = () => {
		router.push('/about');
	};

	const list = ref();
	// console.log(route.query.id);
	let ids = route.query.id;
	const GetDate = () => {
		QuerygetRecord(ids).then((res) => {
			console.log(res, 'QuerygetRecord');
			list.value = res.data.data;
		});
	};
	GetDate();
	//处理时间
	const Timeing = (value: any) => {
		return moment(value).format('YYYY-MM-DD HH:mm:SS');
	};
</script>

<style lang="scss" scoped>
	.list {
		width: 100%;
		height: 120px;
		border-bottom: 1px solid #cccccc5e;
		display: flex;
		justify-content: space-between;
		padding: 0 10px;
		.name {
			font-size: 33px;
		}
		.money {
			font-size: 35px;
			color: green;
		}
		.title {
			font-size: 30px;
			color: #ccc;
		}
		.tow {
			width: 20%;
		}
		.time {
			font-size: 30px;
			color: #ccc;
		}
		.green {
			color: #327357;
		}
		.orange {
			color: orange;
		}
	}
</style>
