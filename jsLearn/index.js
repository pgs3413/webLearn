// console.log("杨超越");
/*
1.js严格区分大小写
2.用分号结尾
3.js会忽略多个空格和换行

*/
// var a;
// a=11;
// a="刘亦菲";
// console.log(a);
// console.log(typeof a);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(typeof NaN);

// console.log("\u2620");

// var obj=new Object();
// obj.name="孙悟空";
// obj.gender="男";
// console.log(obj.name);
// console.log(obj.gender);
// delete obj.gender;
// console.log(obj.gender);
// obj["123"]=789;
// console.log(obj["123"]);
// console.log(obj);

// var obj1=new Object();
// var obj2=new Object();
// obj1.name="孙悟空";
// obj2.name="猪八戒";
// obj1.test=obj2;
// obj1["123"]=789;
// console.log(obj1);
// console.log(obj2);
// console.log(obj1.test.name);
// console.log("name" in obj1);
// console.log(" '123' " in obj1);


// var obj={};
// obj.name="孙悟空";

// var obj={name:"孙悟空",age:19};
// console.log(obj);

//函数也是一个对象
// var fun = new Function("console.log('hello1');");
// fun();
// console.log(fun);

// function fun1(){
//     console.log('hello2');
// }
// fun1();
// console.log(fun1);

// var fun2=function(){
//     console.log('hello3');
// }
// fun2();
// console.log(fun2);


// function sum(a,b){
//     var c=a+b;
//     console.log(c);
// }

// sum(1,2);
// sum('hello','world');
// sum(false,true);

// function sum2(a,b,c){
//     var d=a+b+c;
//     return d;
// }
// var a= sum2(1,2,3);
// console.log(a);

//立即调用函数
// (function(){
//     console.log("hello");
// })();

// var obj=new Object();
// obj.fun=function(){
//     console.log("hello");
// };
// obj.fun();

// var obj={
//     name:"孙悟空",
//     age:19,
//     gender:"男"
// };
// for(var i in obj){
//     console.log(i+':'+obj[i]);
// }

// 在全局作用域中：创建的变量作为windows对象的属性保存
//                 创建的函数作为window的方法保存

// 使用var关键字声明的变量，会在所有的代码执行之前被声明
// 使用function关键字声明的函数会所有的代码执行之前先创建

// var a = 100;
// var a;
// a=100;
// console.log(a);
// var a=100;

// console.log(this);


// 解析器在调用函数时每次都会向函数内部传递一个隐含参数this
// this指向一个对象，即函数执行的上下文对象
// 函数调用方式的不同，this指向不同对象

//使用工厂方式创建对象

// function createObj(name,age,gender){
// var obj={
// name:name,
// age:age,
// gender:gender,
// sayName:function(){
//     console.log(this.name);
// }
// };
// return obj;
// }

// var obj1=createObj("孙悟空",19,"男");
// var obj2=createObj("猪八戒",29,"男");
// var obj3=createObj("沙和尚",39,"男");

// obj1.sayName();

//构造函数
// function Person(){
 
// }
// var obj =new Object();
// var obj2=new Person();
// console.log(obj);
// console.log(obj2);

// function createPerson(name,age,gender){
// var obj=new Person();
// obj.name=name;
// obj.age=age;
// obj.gender=gender;
// obj.sayName=function(){
// console.log(this.name);
// };
// return obj;
// }
// var p1=createPerson("孙悟空",19,"男");
// console.log(p1);

// function Person(name,age,gender){
// this.name=name;
// this.age=age;
// this.gender=gender;
// this.sayName=function(){
// console.log(this.name);
// };
// }

// var p1=new Person("孙悟空",19,"男");
// console.log(p1);


// class Person {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.sayName = function () {
//             console.log(this.name);
//         };
//     }
// }
    
//     var p1=new Person("孙悟空",19,"男");
//     console.log(p1);

// class Person{
//     name="孙悟空";
//     constructor(){}
//     sayName(){
//         console.log(this.name);
//     }

// }
// var p1=new Person();
// p1.sayName();
// console.log(p1.name);

//构造函数（类）和通过此构造函数实例化出的对象都有一个属性
// 指向同一个Object对象(原型对象) prototype __proto__
// 原型对象就相当于一个共同的区域，同一个类的实例都可以访问这个原型对象
// function MyClass(){

// }
// var mc1=new MyClass();
// var mc2=new MyClass();
// MyClass.prototype.a=23;
// console.log(mc1.a);
// MyClass.prototype.sayHello=function(){console.log("hello");};
// mc1.sayHello();
// mc1.name="孙悟空";
// MyClass.prototype.sayName=function(){console.log(this.name);};
// mc1.sayName();

// var arr=new Array();
// arr[0]=0,arr[1]=1,arr[2]=2;
// arr[10]=10;
// console.log(arr[0]);
// console.log(arr[3]);//下标越界结果为undefined，不会报错

// console.log(arr.length);
// console.log(arr[3]);
// arr.length=10;
// console.log(arr.length);
// arr.length=2;
// console.log(arr);
// console.log(arr[2]);

// arr[arr.length]=3;
// console.log(arr);

// var arr=[0,1,2,3,4];
// console.log(arr);

// var arr=[0,"hello",true,null,undefined,NaN];
// console.log(arr);

// var arr=["孙悟空","猪八戒","沙和尚"];
// var len=arr.push("唐僧","白骨精");
// console.log(arr);
// console.log(len);
// arr.pop();
// console.log(arr);
// arr.unshift("如来佛祖");
// console.log(arr);
// arr.shift();
// console.log(arr);

// for(var index in arr) console.log(index+','+arr[index]);

// forEach()方法需要一个函数作为参数
// 每次遍历，系统会将元素以实参的形式传递进来
// 传了三个参数，1.元素 2.下标 3.整体
// arr.forEach(function(a,b,c){
//     console.log(a);
// });

// slice() 切片 左闭右开

// var arr=["孙悟空","猪八戒","沙和尚","唐僧","白骨精"];
// var newArr=arr.slice(0,-1);
// console.log(newArr);

// splice() 可以删除数组中的指定数据 左为起始下标，右为长度
// 删除，替换，增加
// var result=arr.splice(1,0,"牛魔王");
// console.log(result);
// console.log(arr);

// var arr=["孙悟空","猪八戒","沙和尚","唐僧","白骨精"];
// var str=arr.join("-");
// console.log(str);

// arr.reverse();
// console.log(arr);

// var arr=[1,5,8,9,4,3,3,22];
// arr.sort();//数字也按照unicode排序
// console.log(arr);

// 可以给sort（）添加一个回调函数，来指定排序规则
// 回调函数中需要定义两个形参，系统会分别使用数组中的元素作为实参调用函数

// 返回大于0的值，交换位置 小于0，位置不变 等于0 认为两个数相等，位置不变
// arr.sort(function(a,b){
// return a>b?-1:1;
// return a-b;
// });
// console.log(arr);

// call() apply() 
// 函数对象的方法，通过函数名调用
// 函数调用call() apply() 都会执行该函数

// function fun(){
//     console.log("hello");
// }
// fun();
// fun.call();//改变上下文 call还可以直接传fun的参数
// fun.apply();//apply要将参数封装到数组

// function fun(){
//     console.log(this.name);
// }
// var obj={name:"mike"};
// fun.call(obj);

// 调用函数时，系统每次都会传递进两个隐含的参数
// 1.函数的上下文对象 this
// 2.封装实参的对象 arguments 类数组对象
//    可以通过索引来操作数据

// function pj(){
// var str="";
// for(var i=0;i<arguments.length;i++){
//     str+=arguments[i];
// }
// return str;
// }


// var str=pj("hello","world","!");
// console.log(str);


