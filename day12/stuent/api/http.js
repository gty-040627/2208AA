const BaseUrl = 'http://m.mengxuegu.com/api/';
const http = ({
	url,
	method = "GET",
	data = {}
}) => {
	return new Promise((resolve, rejest) => {
		uni.showLoading({
			title: '加载中',
		}),
		uni.request({
			url: BaseUrl + url,
			data,
			method,
			success: (res) => {
				resolve(res.data)
			},
			fail: (error) => {
				rejest(error)
			},
			complete() {
				uni.hideLoading()
			}
		})
	})
}
export default http;