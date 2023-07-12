function greeter(perpon:string){
    return "hello," + perpon
}
let user = "hhh";
document.body.innerHTML = greeter(user)


//    ts数据类型

//1.数字类型
let num1:number = 1
let num2:number = 2
// num2 = '3'
let sum:number = num1 + num2

//2.布尔类型
// let isStatus:boolean = false

// 3.字符串
// let myName:string = '小红'
// let myAge:number =12
// let sentence =`My name is ${myName},My age is ${myAge}`
// document.body.innerHTML = sentence

//4.数组设置类型
// let list:number[] = [1,2,3,4,5]
// let listString:string[]= ['嘻嘻嘻嘻']
//任何类型错误都会提示
// let listing:number[]=['1']  //报错

//5.使用数组 
// ① 长度不限 ② 数据类型是统一的
//数组第一种 []
let list:number[] = [1,2,3]
list.push(6)
let listString:string[] = ['1','2','3']
listString.unshift('9')
//数组第二种new array  泛型，Array<元素类型>
let arrayList:Array<number> = [1,2,3]
let stringList:Array<string> = ['1','2','3']

//6. 元组Tuple
// ① 长度有限 ② 数据类型不统一
let arrayTupil:[number,string,boolean] = [1,'2',false]

// 7.viod 类型
function Name ():void{
    console.log('xxx');
}
//如果有返回值，那么就要根据返回值进行定义，就不能定义成为void
function Name2 ():string{
    console.log('xxx');
    return '高甜媛'
}

//8.枚举 enum
//当定义的变量越多，我们独自封装，会越好维护以后的项目，方便项目查看
enum Color {
    red=1,
    blue=2,
    green=3
}
let a :Color = Color.green;
console.log(a);  //3

enum Colors {
    red,
    blue=2,
    green
}
let b :Color = Color.green;
console.log(a);  //3

//9.联合类型 | 不是其中一个就是另外一个
let names :string |null
names=''
names=null
//交叉类型
interface Poll{
    name:string
}
interface Polls {
    age:number
}
type A = Poll & Polls
let obj:A = {
    name:"111",
    age:1
}


// interface 函数代码
interface getName {
    firstName:string,
    lastName:string
}
const getFullName = ({firstName,lastName}:getName):string=>{
    return `${firstName} ${lastName}`
}
// console.log(getFullName({firstName:'高',lastName:'甜媛'}));


//继承
interface Vater {
    color:string;
}
interface TOTO extends Vater{
    radius :number;
}
interface carter extends Vater{
    length :number;
}
const tomato :TOTO = {
    radius:1.2,
    color:'2'
};
const car : carter ={
    color:'orange',
    length:20
}






