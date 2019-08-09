const path=require("path");

// const pathResolve=path.resolve(".")
// console.log(pathResolve==__dirname);

// path.join.
// console.log(path.join(__dirname,"./path.js"));
// console.log(path.join(__dirname,"/path.js"));
// console.log(path.join(__dirname,"path.js"));
// console.log(path.join("foo","name","age"))
// console.log(path.join());  // .

// path.resolve
// console.log(path.resolve("foo","name","age"))  // E:\min\min-back\Node.js\module\path\foo\name\age
// console.log(path.resolve("foo","/name","age"))  // E:\name\age
// console.log(path.resolve("/foo","name","age"))    // E:\foo\name\age
console.log(path.resolve());   //E:\min\min-back\Node.js\module\path

/*
** 区别
*/
// 1、join是把各个path片段连接在一起， resolve把‘/’当成根目录

path.join('/a', '/b'); 
// /a/b
path.resolve('/a', '/b');
// /b

// 2、resolve在传入非/路径时，会自动加上当前目录形成一个绝对路径，而join仅仅用于路径拼接

// 当前路径为  /Users/xiao/work/test
path.join('a', 'b', '..', 'd');
// a/d
path.resolve('a', 'b', '..', 'd');
// /Users/xiao/work/test/a/d