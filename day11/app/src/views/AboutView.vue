<template>
	<div class="about">
		<div id="map"></div>
	</div>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue';
	// 导入包
	import AMapLoader from '@amap/amap-jsapi-loader';
	// 高德 v2.0需要配置安全密钥jscode
	//（自2021年12月02日升级，升级之后所申请的 key 必须配备安全密钥 jscode 一起使用)
	window._AMapSecurityConfig = {
		securityJsCode: 'ce4ffaf5f925a49ed2a1f8dafba723a9', // 安全密钥jscode
	};
	onMounted(() => {
		// 调用地图
		initMap();
	});
	const initMap = () => {
		AMapLoader.load({
			key: '49c7e1662eca549a8c1dc5c7532c9750', // 申请好的Web端开发者Key，首次调用 load 时必填
			version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
			// plugins: [''] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
		}).then((AMap) => {
			// 使用 Amap 初始化地图 .then 异步了 所以直接就能拿到 #map容器了
			const map = new AMap.Map('map', {
				// 设置地图容器id
				// viewMode: '3D', //是否为3D地图模式
				zoom: 4, //初始化地图级别 一般12
				center: [105.602725, 37.076636], //初始化地图中心点位置 不设置默认是北京
				// mapStyle: 'amap://styles/whitesmoke' // 设置地图样式 远山黛
			});
			// 加载路线规划插件
			AMap.plugin('AMap.Driving', function () {
				// 初始化路线规划对象
				var driving = new AMap.Driving({
					// 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
					// policy: AMap.DrivingPolicy.LEAST_TIME,
					map: map, //AMap.Map对象, 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上。可选 ps:此处必须有 不然不知道在哪个地图上
					showTraffic: false, //设置是否显示实时路况信息，默认设置为true。 显示绿色代表畅通，黄色代表轻微拥堵，红色代表比较拥堵，灰色表示无路况信息。
					hideMarkers: true, //设置隐藏路径规划的起始点图标 设置为true
				});

				let startLngLat = [117.2147, 39.11712]; // 起始的经纬度
				let endLngLat = [126.95717, 45.54774]; // 结束的经纬度

				// startLngLat:起始坐标
				// endLngLat:终点坐标
				// {waypoints:[]}: 路途中的经纬度坐标
				// function (status, result){} 规划好的回调函数
				driving.search(
					startLngLat,
					endLngLat,
					{
						waypoints: [
							[116.23128, 40.22077], // 北京
							[119.48458, 39.83507], // 秦皇岛
							[121.5255, 38.95223], // 大连
							[123.46987, 41.80515], // 沈阳
							[125.28845, 43.83327], //长春
						],
					},
					function (status: string, result: object) {
						// 未出错时，result即是对应的路线规划方案
					},
				);
			});
			// 加载路线规划插件
			AMap.plugin('AMap.Driving', function () {
				// 初始化路线规划对象
				// https://lbs.amap.com/api/javascript-api-v2/documentation#driving
				const driving = new AMap.Driving({
					// 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
					// policy: AMap.DrivingPolicy.LEAST_TIME,
					map: map, //AMap.Map对象, 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上。可选 ps:此处必须有 不然不知道在哪个地图上
					showTraffic: false, // 设置是否显示实时路况信息，默认设置为true。 显示绿色代表畅通，黄色代表轻微拥堵，红色代表比较拥堵，灰色表示无路况信息。
					hideMarkers: true, //设置隐藏路径规划的起始点图标 设置为true
				});

				// 创建标记函数
				const getMarker = (
					point: number[],
					image: string,
					width = 150,
					height = 100,
				) => {
					const icon = new AMap.Icon({
						size: new AMap.Size(width, height),
						image,
						imageSize: new AMap.Size(width, height),
					});
					const marker = new AMap.Marker({
						position: point,
						icon: icon,
						offset: new AMap.Pixel(-width / 1, -height), // AMap.Pixel 像素坐标，确定地图上的一个像素点。
					});
					return marker;
				};
        	// 使用标点
				let startLngLat = [117.2147, 39.11712]; // 起始的经纬度
				let endLngLat = [126.95717, 45.54774]; // 结束的经纬度
				// 创建一个 Icon
				var startIcon = new AMap.Icon({
					// 图标尺寸
					size: new AMap.Size(25, 34),
					// 图标的取图地址
					image:
						'//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
					// 图标所用图片大小
					imageSize: new AMap.Size(135, 40),
					// 图标取图偏移量
					imageOffset: new AMap.Pixel(-9, -3),
				});

				// 将 icon 传入 marker
				var startMarker = new AMap.Marker({
					position: new AMap.LngLat(117.2147, 39.11712),
					icon: startIcon,
					offset: new AMap.Pixel(-13, -30),
				});

				// 创建一个 icon
				var endIcon = new AMap.Icon({
					size: new AMap.Size(25, 34),
					image:
						'//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
					imageSize: new AMap.Size(135, 40),
					imageOffset: new AMap.Pixel(-95, -3),
				});

				// 将 icon 传入 marker
				var endMarker = new AMap.Marker({
					position: new AMap.LngLat(126.95717, 45.54774),
					icon: endIcon,
					offset: new AMap.Pixel(-13, -30),
				});
				// 将 markers 添加到地图
				map.add([ startMarker, endMarker]);

				// startLngLat:起始坐标
				// endLngLat:终点坐标
				// {waypoints:[]}: 路途中的经纬度坐标
				// function (status, result){} //规划好的回调函数
				driving.search(
					startLngLat,
					endLngLat,
					{
						waypoints: [
							[116.23128, 40.22077], // 北京
							[119.48458, 39.83507], // 秦皇岛
							[121.5255, 38.95223], // 大连
							[123.46987, 41.80515], // 沈阳
							[125.28845, 43.83327], //长春
						],
					},
					function (status: string, result: object) {
						// 未出错时，result即是对应的路线规划方案
						// 运输位置 使用标点
						const curr = [121.5255, 38.95223];
						const carImg = require('../../public/car.jpg');
						const currMarker = getMarker(curr, carImg, 33, 20);
						map.add(currMarker);
						// 3s后定位当中间进行缩放
						setTimeout(() => {
							map.setFitView(
								[currMarker], // 覆盖物数组
								// false, // 动画过渡到制定位置
								// [60, 60, 60, 60], // 周围边距，上、下、左、右
								// 10 // 最大 zoom 级别
							);
							map.setZoom(10);
						}, 3000);
					},
				);
			});
		});
	};
</script>

<style lang="scss" scoped>
	#map {
		width: 100%;
		height: 600px;
		background-color: #f6f7f9;
		overflow: hidden;
	}
</style>
