<template>
	<div class="transferAccount">
		<van-nav-bar title="转账" left-arrow @click-left="onClickLeft" />
		<van-cell-group inset>
			<van-field
				v-model="UserSure.receiver"
				label="收款人"
				placeholder="请输入收款人姓名"
				@click="OpenShow"
			/>
			<van-field
				v-model="UserSure.receiverNumber"
				label="收款账号"
				placeholder="请输入收款账号 "
			/>
		</van-cell-group>
		<van-cell-group inset>
			<van-field
				v-model="UserSure.amount"
				label="转账金额"
				placeholder="请输入转账金额"
			/>
		</van-cell-group>
		<van-cell-group inset>
			<van-field
				v-model="shoukuai"
				label="付款账户"
				placeholder="请选择银行"
			/>
			<van-field v-model="money" label="余额" placeholder="多少" />
		</van-cell-group>
		<van-cell-group inset>
			<van-field
				v-model="UserSure.remark"
				label="转账用途"
				placeholder="30字以内的描述(选填)"
			/>
		</van-cell-group>
		<van-button type="primary" @click="Over">转账</van-button>

		<!-- 隐藏面板全部收款人 -->
		<van-action-sheet v-model:show="show" title="全部收款人">
			<div class="content">我的同名账户</div>
			<div v-for="item in UserList" :key="item.id">
				<div class="list" @click="GetItemUser(item)">
					<div><img src="../../public/bank.png" alt="" /></div>
					<div>
						<p class="name">
							{{ item.user }}
							<span>{{ item.antherName }}</span>
						</p>
						<p class="number">中国建设银行({{ item.cardNumber }})</p>
					</div>
				</div>
			</div>
		</van-action-sheet>
	</div>
</template>

<script setup lang="ts">
	import { ref, reactive, toRefs } from 'vue';
	import { useStore } from 'vuex';
	import { useRouter, useRoute } from 'vue-router';
	import { QueryList, QueryListMoney } from '../utils/api';
	import * as TS from '../utils/defind';
	import { showNotify } from 'vant';
	const store = useStore();
	const router = useRouter();
	const route = useRoute();
	const data = reactive({});

	//返回
	const onClickLeft = () => {
		router.push('/about');
	};
	const UserSure = ref<TS.ListMoney>({
		receiver: '',
		receiverNumber: '',
		receiverId: 0,
		payer: route.query.user as string,
		payerNumber: route.query.cardNumber as string,
		payerId: route.query.id as number, 
		amount: '',
		remark: '',
	});
	//回填金额和账户
	const money = ref();
	const shoukuai = ref()
	// console.log(route.query.items);
	// const Getitem = () => {
	// 	let item = JSON.parse(route.query.items);
	// 	// console.log(item);
		money.value = route.query.balance;
		shoukuai.value = route.query.cardNumber;
	// };
	// Getitem();

	//打开隐藏面板
	const show = ref(false);
	const OpenShow = () => {
		show.value = true;
	};

	const UserList = ref();
	const GetUser = () => {
		QueryList().then((res) => {
			// console.log(res, 'QueryList');
			UserList.value = res.data.data;
		});
	};
	GetUser();

	//面板弹出，回填收款人
	const GetItemUser = (item: any) => {
		// console.log(item, 'item');
		UserSure.value.receiverId = item.id;
		UserSure.value.receiver = item.user;
		UserSure.value.receiverNumber = item.cardNumber;
		show.value = false;
	};

	//点击转账
	const Over = () => {
		// UserSure.value.payerId=parseFloat(UserSure.value.payerId)
		QueryListMoney(UserSure.value).then((res) => {
			// console.log(res, 'QueryListMoney');
			router.push('/about')
			showNotify({ type: 'success', message: '转账成功' });
		});		
	};
</script>

<style lang="scss" scoped>
	.transferAccount {
		width: 95vw;
		height: calc(100vh - 100px);
		background-color: #cccccc39;
	}
	.van-cell-group {
		width: 98%;
		margin: 20px auto;
	}
	.van-button {
		width: 95%;
		margin: 20px;
	}
	.content {
		padding: 16px 16px 16px;
		font-size: 25px;
		border-bottom: 1px solid #ccc;
	}
	.van-action-sheet {
		position: fixed;
		bottom: 0;
		height: 300px;
	}
	.list {
		display: flex;
		align-items: center;
		height: 130px;
		border-bottom: 1px solid #ccc;
		img {
			width: 70px;
			height: 70px;
		}
		.name {
			font-size: 35px;
			font-weight: 700;
			display: flex;
			align-items: center;
			span {
				display: inline-block;
				font-size: 28px;
				color: #fff;
				width: 100px;
				height: 40px;
				background-color: #ffa500;
				text-align: center;
				line-height: 40px;
				margin-left: 20px;
			}
		}
		.number {
			font-size: 35px;
		}
	}
</style>
