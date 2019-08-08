// console.log("app.js".endsWith(".js"))
// console.log("app.js".startsWith("app"))

const fs=require("fs");
// 阻塞读取文件
// const fs = require("fs");
// const data= fs.readFileSync("./read/hello.js")
// console.log(data.toString())

// 非阻塞读取文件
// const fs = require("fs");
// fs.readFile("./read/hello.js",function (err,data) {
//     if(err) throw err;
//     console.log(data.toString())
// })

// 非阻塞写入文件
const data="哈哈哈，你好啊！";
fs.writeFile("./read/china.js",data,function (err) {
    if(err) throw err;
})


// stream 创建流，读取数据
// let data="";
// const readerStream=fs.createReadStream("./read/hello.js")
// readerStream.setEncoding("UTF8");
// readerStream.on("data",chunk=>{
//     data+=chunk
// })
// readerStream.on("end",()=>{
//     console.log(data);
// })
// readerStream.on("error",(err)=>{
//     throw err
// })

// stream 创建流，写入数据
// const data="wo shi hejiamin , best!!!"
// const writeStream=fs.createWriteStream("./read/out.js")
// writeStream.write(data,"UTF8");
// writeStream.end();
// writeStream.on("finish",()=>{
//     console.log("写入完成！")
// })
// writeStream.on("error",(err)=>{
//     throw err;
// })
