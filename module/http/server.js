const http=require("http");
const server=new http.Server();
server.listen(8000);
server.on("request",function(req,res){
	console.log(req.url);
	res.end("Server is using")
})