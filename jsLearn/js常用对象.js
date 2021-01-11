// 1.Date对象
// var d= new Date();
// var d=new Date("5/20/2020 11:11:11");
// console.log(d);

// var start=Date.now();
// for(var i=0;i<100;i++) console.log(i);
// var end =Date.now();
// console.log((end-start)+"毫秒");

// 2.String的方法
// var str="hello world!";
// length 索引[]  charAt() charCodeAt() String.formCharCode()
// concat() indexOf() lastIndexOf() slice() substring() substr()
// split()可以将一个字符串拆分为一个数组 传入一个字符参数
//   toUpperCase() toLowerCase()
// 

// 3.正则表达式 

// new RegExp("正则表达式","匹配模式");
// 匹配模式：i ignore 忽略大小写 g global 全局匹配模式
// var reg=new RegExp("A","i");//"a"匹配"a"
// var result=reg.test("abc");//拥有就返回true
// console.log(result);

//正则表达式语法 = /正则表达式/匹配模式
// var reg =/a/i;
// var result=reg.test("a");
// console.log(result);

// var reg =/a|b/;// 竖线“|” 或
// var result=reg.test("bcd");
// console.log(result);

// [a-z] 任意小写字母 [A-Z]任意大写字母 [A-z]任意字母 [0-9]任意数字
// var reg =/[abcd]/;//[]表示一个字符 里面表示或的关系
// var result=reg.test("bgf");
// console.log(result);
//只要字符串中含有[]表示的字符，则true
// 匹配 abc或adc或aec  /a[bde]c/

//[^ ] 除了
// var reg =/[^ab]/;
// var result=reg.test("abc");
// console.log(result);

// 与字符串相关的String方法
// search() match() replace() split() 

// var str="1a2b3c4d5e6f7";
// var result=str.split(/[A-z]/);
// console.log(result);

// var str="helloabchelloaecafc";
// var result=str.search(/a[bef]c/);//返回下标
// console.log(result);

// match（） 从一个字符串中将符合条件的内容提取出来 
// g 全局匹配

// var str="1a2b3c4d5e6f7";
// var result=str.match(/[A-z]/g);
// console.log(result);

// var str="hello abc hello aec afc";
// var result=str.replace(/a[bef]c/g,"world");
// console.log(result);


// 指定量词 {x} {x,y} {x,}
// /a{3}/=/aaa/ /ab{1,3}c/=a 1到3个b c ab{3,}c=a 至少3个b c

// 不定量词 +至少一个 *零个或一个 ？零个或一个
// ab+c=a 至少一个b c
// ab*c=a 任意多个b c
// ab?c=a 0个或1个b c

// ^ 开头 $结尾
// ^a 以a开头 a$以a结尾

//  var str="hello world hello world hello";
// var result=str.replace(/^hello/g,"hi");
// console.log(result);

// var str="hello world hello world hello";
// var result=str.replace(/hello$/g,"hi");
// console.log(result);


// var str="hello";
// var result=str.replace(/^hello$/g,"hi");
// console.log(result);

// ^1[3-9][0-9]{9}$ 手机号

// . 匹配任意单个字符 \w \W \d \D \s \S \b单词边界 \B 
//  \ 转义字符
// new RegExp("\\.");

// var reg=/\bchild\b/;
// var result=reg.test("hello children");
// var result=reg.test("hello child");
// console.log(result);

// console.log("4"++);
// 保留两位小数 toFixed（2）

// console.log(4.555.toFixed(2));