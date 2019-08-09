/*  输入url到展示页面的过程
*   1. DNS解析，建立TCP连接(客户端和服务器三次握手建立连接)，发起http请求
*   2. server 接收到 http请求，处理，并返回
*   3. 客户端接收到返回数据，处理数据(如渲染页面，执行js)
*



    三次握手：
    1. 客户端询问服务器你是否可用
    2. 服务器告诉客户端自己可用
    3. 客户再次告诉服务器即将访问服务器
*/

/*
** 被忽略的write方法
*/
// res.write("网站名称")
// res.end("ending")

//处理get请求
/*
const http= require("http");
const querystring= require("querystring");
const server = http.createServer((req,res)=>{
	console.log(req.method);
	const url=req.url;
	req.query= querystring.parse(url.split("?")[1]);
	console.log(req.query);
	res.end(JSON.stringify(req.query));
})

server.listen(8082,()=>{
	console.log("服务器已经在8082端口启动");
}) 
*/


/* 处理post请求   */
// const http=require("http");
// const server = http.createServer((req,res)=>{
// 	if(req.method ==="post"){
// 		// 数据格式
// 		console.log("content-type",req.headers["content-type"]);
//         // 接收数据
//         let postData = "";
//         req.on("data",chunk=>{
//         	postData += chunk.toString();
//         })
//         req.on("end",()=>{
//         	console.log(postData);
//         	res.end("request is end");
//         })

// 	}
// 	// res.end("hello res");
// })
// server.listen(8082,()=>{
// 	console.log("server 已经启动")
// });


/*  整体处理 */
const http=require("http");
const querystring=require("querystring");
const server = http.createServer((req,res)=>{
	const method = req.method;
	const url=req.url;
	const path =url.split("?")[0];
	const query=querystring.parse(url.split("?")[1]);
	res.setHeader("Content-type","application/json");
	const resData={
		method,
		url,
		path,
		query
	}
	if(method==="GET"){
		res.end(JSON.stringify(resData));
	}
	if(method==="POST"){
		let postData="";
		req.on("data",chunk=>{
        	postData += chunk.toString();
        })
        req.on("end",()=>{
        	resData.postData=postData;
        	res.end(JSON.stringify(resData));
        })
	}
})
server.listen(3000,()=>{
	console.log("server is running");
})