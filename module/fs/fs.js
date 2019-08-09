// console.log("app.js".endsWith(".js"))
// console.log("app.js".startsWith("app"))

const fs=require("fs");

// 获取文件信息  // todo
// fs.stat("./read/china.js",function(err,stat){
// 	if(err) throw err;
// 	// console.log(stat);
// 	console.log(stat.isFile());   // isFile(),  isDirectory(),  
// })

// 打开文件
// fs.open("./read/china.js","r+",function(err,fd){
// 	if(err) throw err;
// 	console.log("fd的内容是:  "+fd);
// })

// 删除文件
// fs.unlink("./read/delete.js",function(err){
// 	if(err) throw err;
// 	console.log("文件删除成功");
// })

// 创建文件夹
// fs.mkdir("/read/min",{recursive:true},function(err){
// 	if(err) throw err;
// 	console.log("文件夹 创建成功");
// })

// 读取目录
// fs.readdir("./read",function(err,files){
// 	if(err) throw err;
// 	files.forEach(function(file){
// 		console.log(file);
// 	})
// })

// 移除目录
// fs.rmdir("/tmp/test",function(err){
	
// })

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
// const data="哈哈哈，你好啊！";
// fs.writeFile("./read/china.js",data,function (err) {
//     if(err) throw err;
// })

// 阻塞写入文件
// const data="这是input.txt文件";
// fs.writeFileSync("./read/input.txt",data);


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


// 管道流
// const readeStream = fs.createReadStream("./read/input.txt");
// const writeStream = fs.createWriteStream("./read/output.txt");
// readeStream.pipe(writeStream);

// 压缩
// const zlib=require("zlib");
// fs.createReadStream("./read/input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("./read/input.txt.gz"))

// 解压
// const zlib=require("zlib");
// fs.createReadStream("./read/input.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("./read/input-out.txt"))