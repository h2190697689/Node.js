/*
	emit
	on
	once 
	removeListener
	removeAllListeners
*/


const EventEmitter=require("events");

class CustomEvent extends EventEmitter{}

const ce=new CustomEvent();

// ce.on("call",(err,name)=>{
// 	console.log(`call is listening but there is ${err},and  my name is ${name}`);
// })

// ce.once("connect",()=>{
// 	console.log("connecting is running");
// })

function min(){
	console.log("min");
}
ce.on("min",min);

// setTimeout(()=>{
// 	ce.emit("call","no err","hejiamin");
// },2000)

// setInterval(()=>{
// 	ce.emit("connect");
// },1000)

setInterval(()=>{
	ce.emit("min");
    ce.removeListener("min",min);
},1000)