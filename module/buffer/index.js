// buffer 是node原生对象，可以直接使用
/*
  Buffer.from
  Buffer.alloc
  Buffer.allocUnsafe
  Buffer.isBuffer
  Buffer.concat([])
*/


// Buffer.from
// const buf=Buffer.from("string","utf8");  // 第二个参数可省略,第一个参数可以为字符串，数组，buffer,对象

// Buffer.alloc
// const buf=Buffer.alloc(10,1,"utf8");  // 二三参数可省略,一为长度，二为填充值

// Buffer.allocUnsafe
// const buf=Buffer.allocUnsafe(10);

// Buffer.isBuffer(obj)
// const str="hejiamin";
// const res=Buffer.isBuffer(buf);



/*
  buf.fill
  buf.includes  (是否存在，返回true或false)
  buf.indexOf
  buf.length
*/

// 数组类似操作
// const buf=Buffer.alloc(10,1);
// buf[2]=6;



// buf.fill


// const buf=Buffer.from([1,2,3]);

// for(const b of buf){
// 	console.log(b);
// }
// console.log(buf.keys());



// console.log(buf);
// console.log(res); 


/*
	处理乱码
*/
const StringDecoder=require("string_decoder").StringDecoder;
const decoder=new StringDecoder("utf8");

const buf=Buffer.from("中国万岁");
for(let i=0;i<buf.length;i+=5){
	const b=Buffer.allocUnsafe(5);
	buf.copy(b,0,i);
	console.log(decoder.write(b));
}