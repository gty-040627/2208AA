"use strict";
function greeter(perpon) {
    return "hello," + perpon;
}
let user = "hhh";
document.body.innerHTML = greeter(user);
let num1 = 1;
let num2 = 2;
let sum = num1 + num2;
let list = [1, 2, 3];
list.push(6);
let listString = ['1', '2', '3'];
listString.unshift('9');
let arrayList = [1, 2, 3];
let stringList = ['1', '2', '3'];
let arrayTupil = [1, '2', false];
function Name() {
    console.log('xxx');
}
function Name2() {
    console.log('xxx');
    return '高甜媛';
}
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["green"] = 3] = "green";
})(Color || (Color = {}));
let a = Color.green;
console.log(a);
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["blue"] = 2] = "blue";
    Colors[Colors["green"] = 3] = "green";
})(Colors || (Colors = {}));
let b = Color.green;
console.log(a);
let names;
names = '';
names = null;
let obj = {
    name: "111",
    age: 1
};
const getFullName = ({ firstName, lastName }) => {
    return `${firstName} ${lastName}`;
};
const tomato = {
    radius: 1.2,
    color: '2'
};
const car = {
    color: 'orange',
    length: 20
};
