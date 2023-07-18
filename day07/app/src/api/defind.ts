/**校验登录表单 */
interface RuleForm {
	username: string,
	password: string
}

/**登录接口的返回值校验 */
interface LoginRes {
	id: number,
	rid: number,
	username: string,
	mobile: string,
	email: string,
	token: string,
	// [props: string]: any,
}

//用户接口返回值校验
interface GetUser {
	pagesize: number,
	pagenum: number,
	query?: string
}

//添加表单验证类型
interface AddForm {
	username: string,
	password: number,
	email: string,
	mobile: number
}
//编辑表单验证类型
interface MeitForm {
	id: number,
	rid: number,
	mobile: number,
	email: string,
	username: string
}

//角色列表添加验证类型
interface RolesAdd {
	roleName: string,
	roleDesc: string
}
//角色列表编辑验证类型
interface RolesMeit {
	roleId: number,
	roleName: string,
	roleDesc: string,
	rolePermissionDesc: any
}
//树状图验证类型
interface TreeList {
	id: number,
	rid: number
}


//商品列表验证类型
interface GoodsList {
	query: number
	pagenum: number
	pagesize: number
}

//商品编辑验证类型
interface GoodsListLook {
	goods_id: number,
	goods_name: string,
	goods_price: number,
	goods_number: number,
	goods_weight: number
}
//商品添加验证类型
interface GoodsListAdd {
	goods_name: string
	goods_number: string
	goods_price: string
	goods_weight: string
	pics?: string
}


//分类参数表单验证类型
interface CategoriesList {
	cat_name: string,
	cat_id: string
}


//商品分配首页验证类型
interface CategoriesList2 {
	type: number
	pagenum: number
	pagesize: number
}


//商品分配编辑验证类型
interface CategoriesListMeit {
	cat_deleted: boolean,
	cat_id: number,
	cat_level: number,
	cat_name: string,
	cat_pid: number
}


interface OrderList {
	query?: number,
	pagenum: number,
	pagesize: number
}



export {
	RuleForm,
	LoginRes,
	GetUser,
	AddForm,
	MeitForm,
	RolesAdd,
	RolesMeit,
	TreeList,
	GoodsList,
	GoodsListLook,
	GoodsListAdd,
	CategoriesList,
	CategoriesList2,
	CategoriesListMeit,
	OrderList
}
