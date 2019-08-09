const http=require("http");

const options={
	host: "localhost",
	port: "3000",
	path: "index.html"
}

const req=http.request(options,(res)=>{
	// console.log(res);
	let body="";
	res.on("data",(data)=>{
		body=body+data;
	});
	res.on("end",()=>{
		console.log(body);
		console.log("ending---------")
	})
})
req.end();