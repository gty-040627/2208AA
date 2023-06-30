<template>
    <div>
        <!-- 计算属性 -->
        <!-- 姓 <input type="text" v-model="firstName"> <br>
        名 <input type="text" v-model="lastName">
        <p> {{ fullName }}</p> -->

        <!-- 使用计算属性 -->
        <h2>今天天气很{{ info }}</h2>
        <button @click="changeWeahter">切换天气</button>
        <!-- 使用监听属性 -->
        <!-- <h2>今天天气很{{ isHot }}</h2>
        <button @click="changeWeahter">切换天气</button> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: '高',
            lastName: "甜媛",
            isHot:true
        }
    },
    methods: {
        changeWeahter(){
            this.isHot =! this.isHot
        }
    },
    created() {

    },
    mounted() {

    },
    components: {

    },
    computed: {
        // 计算属性完整写法
        // fullName:{
        //     get(){
        //         // console.log("get");
        //         return this.firstName + "-" + this.lastName
        //     },
        //     set(newValue){
        //         let result = newValue.split('-')
        //         this.firstName = result[0]
        //         this.lastName = result[1]
        //     }
        // },
        // 计算属性 简写方式
        // fullName() {
        //     return this.firstName + "-" + this.lastName
        // }，
        // 使用计算属性来进行监听
        info(){
            return this.isHot ? '炎热' :"凉爽"
        }
    },
    watch: {
        isHot:{
            immediate:true,   // 初始化时让hander调用一下
            handler(newValue,oldValue){
                console.log('isHot被修改',newValue,oldValue);
            }
        }
    },
}
</script>

<style lang='scss' scoped></style>
