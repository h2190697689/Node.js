const http=require("http");

/*
** 发出http请求
** 可以为GET或者GET请求
*/


// GET
// http.request({
// 	host:"localhost",
// 	port: "3000",
// 	path:"/",
// 	method: "GET"
// },(res)=>{
// 	let body="";
// 	res.on("data",(d)=>{
// 		body+=d;
// 	})
// 	res.on("end",()=>{
// 		console.log(body);
// 	})
// })

// POST
const postData=JSON.stringify({msg:"request is powerful"});
const req=http.request({
	host:"localhost",
	port: "3000",
	path:"/",
	method: "POST"
},(res)=>{
	res.setEncoding("utf8");
	res.on("data",(chunk)=>{
		console.log("Body:  " + chunk);
	})
})
req.on("error",(e)=>{
	console.log("there is error")
})
req.write(postData);
req.write("data\n");
req.end();
