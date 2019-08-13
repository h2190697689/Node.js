const http=require("http");

const html= '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
const server=http.createServer((req,res)=>{
	res.writeHead(200,{"Content-Type":"text/html; charset=utf8"});
  res.setHeader("key","value");
	// res.write(html);
	res.end(html);
}).listen(3000,()=>{
	console.log("server is running on port 3000")
})