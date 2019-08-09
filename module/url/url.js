const http=require("http");
const url=require("url");

const PORT = 3000;

const server=http.createServer(function(req,res){
	console.log(req.url);
	const urlObj = url.parse(req.url);
	// console.log(urlObj);
	res.end("hello url");
})

server.listen(PORT,()=>{
	console.log(`server is running on ${PORT}`);
})