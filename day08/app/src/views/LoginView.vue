<template>
	<div class="login">
		<div class="login-item">
			<p>登录</p>
			<van-form>
				<van-cell-group inset>
					<van-field
						v-model="from.mobile"
						name="手机号"
						label="手机号"
						placeholder="请输入手机号"
						:rules="[{ required: true, message: '请填写手机号' }]"
					/>
					<van-field
						v-model="from.password"
						type="password"
						name="密码"
						label="密码"
						placeholder="密码"
						:rules="[{ required: true, message: '请填写密码' }]"
					/>
				</van-cell-group>
				<div style="margin: 16px">
					<van-button
						round
						block
						type="primary"
						native-type="submit"
						@click="GotoAbout"
					>
						提交
					</van-button>
				</div>
			</van-form>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, reactive, toRefs } from 'vue';
	import { useStore } from 'vuex';
	import { useRouter, useRoute } from 'vue-router';
	import { QueryLogin } from '../utils/api';
	import { showNotify } from 'vant';
	import * as TS from '../utils/defind';
	const store = useStore();
	const router = useRouter();
	const route = useRoute();
	const data = reactive({});

	const from = reactive({
		mobile: '',
		password: '',
	});
	//获取接口
	const GotoAbout = () => {
		console.log(123456);
		QueryLogin(from).then((res) => {
			// console.log(res, 'QueryLogin');
			localStorage.setItem('token', res.data.token);
			router.push('/about');
			showNotify({ type: 'success', message: '登陆成功' });
		});
	};
</script>

<style lang="scss" scoped>
	.login {
		width: 100vw;
		height: 100vh;
		background-color: #7eb6e0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.login-item {
			width: 80%;
			// height: 450px;
			background-color: #fff;
			border-radius: 10px;
			p {
				text-align: center;
				padding-top: 20px;
			}
		}
	}
</style>
