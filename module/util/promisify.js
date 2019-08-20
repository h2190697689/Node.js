const fs=require("fs");
const {promisify}=require("util");

const read=promisify(fs.readFile);

read("./read/index.js").then((res)=>{
	console.log(res.toString());
})