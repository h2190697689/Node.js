const http=require("http");
http.get({
	host: "localhost",
	port: "3000",
	path: "/"
},(res)=>{
	let body="";
	res.on("data",(d)=>{
		body+=d;
	})
	res.on("end",()=>{
		console.log(body);
	})
})