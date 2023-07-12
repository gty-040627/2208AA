function greeter(perpon) {
    return "hello," + perpon;
}
var user = "hhh";
document.body.innerHTML = greeter(user);
//    ts数据类型
//1.数字类型
var num1 = 1;
var num2 = 2;
// num2 = '3'
var sum = num1 + num2;
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
var list = [1, 2, 3];
list.push(6);
var listString = ['1', '2', '3'];
listString.unshift('9');
//数组第二种new array  泛型，Array<元素类型>
var arrayList = [1, 2, 3];
var stringList = ['1', '2', '3'];
//6. 元组Tuple
// ① 长度有限 ② 数据类型不统一
var arrayTupil = [1, '2', false];
// 7.viod 类型
function Name() {
    console.log('xxx');
}
//如果有返回值，那么就要根据返回值进行定义，就不能定义成为void
function Name2() {
    console.log('xxx');
    return '高甜媛';
}
//8.枚举 enum
//当定义的变量越多，我们独自封装，会越好维护以后的项目，方便项目查看
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["green"] = 3] = "green";
})(Color || (Color = {}));
var a = Color.green;
console.log(a); //3
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["blue"] = 2] = "blue";
    Colors[Colors["green"] = 3] = "green";
})(Colors || (Colors = {}));
var b = Color.green;
console.log(a); //3
//9.联合类型 | 不是其中一个就是另外一个
var names;
names = '';
names = null;
var obj = {
    name: "111",
    age: 1
};
var getFullName = function (_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return "".concat(firstName, " ").concat(lastName);
};
var tomato = {
    radius: 1.2,
    color: '2'
};
var car = {
    color: 'orange',
    length: 20
};
