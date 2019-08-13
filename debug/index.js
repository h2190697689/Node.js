const http=require("http");

const server=http.createServer((req,res)=>{
	// console.log(req);
	if(req.path==="data"){
		res.end("this is data message");
	} else {
		res.end("hello");
	}
})

server.listen(3000,()=>{
	console.log("server is running on port 3000");
})