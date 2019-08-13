const http=require("http");
const url=require("url");


/*
** params req: {url,method,headers}
*/
const server=http.createServer((req,res)=>{
	req.setEncoding("utf8");
	res.writeHead(200,{"Content-Type":"application/json"});
	// console.log(req.method);
	// console.log(req.url);
 //    console.log(req.path);
 	// console.log(req);
  //   console.log(url.parse(req.url));
  if(req.method==="POST"){
  	let message="";
  	req.on("data",(d)=>{
  		message+=d;
  	})
  	req.on("end",()=>{
  		console.log(message);
  	})
  }
    res.end(JSON.stringify({name:"hejiamin",age:22}));

})
server.listen(3000,()=>{
	console.log("server is running on port 3000");
})