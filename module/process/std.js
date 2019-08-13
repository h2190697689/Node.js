const fs=require("fs");

// process.stdout.write等同于console.log
// 输出文件内容
fs.createReadStream("./read/index.js").pipe(process.stdout)