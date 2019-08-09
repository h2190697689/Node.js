const http=require("http");
const url=require("url");
const fs=require("fs");

const server=http.createServer((req,res)=>{
	const parseUrl=url.parse(req.url);
	const pathName=parseUrl.pathname;
    // console.log(parseUrl);
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"})
    let relPath="./public"+pathName;
    fs.readFile(relPath,(err,data)=>{
    	if(err){
    		console.log(err);
    		data=fs.readFileSync("./public/index.html")
    	}
    	res.write(data.toString());
    	res.end();
    })
})

server.listen(3000,()=>{
	console.log("server is running on port 3000");
})