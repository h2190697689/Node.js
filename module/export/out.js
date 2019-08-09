/*
** module.exports引入
*/
// const {hello,add} = require("./module-exports");

// hello();
// add(1,2);

/*
** exports 引入
*/ 
// const content = require("./exports.js");
// console.log(content.name);
// content.delete(9,3);
// delete(6,1);
// console.log(delete);


/* 
** 混合  失败,error
*/ 
const content = require("./export-module.js");
content.clear(3,6);
// content.delete(9,3);