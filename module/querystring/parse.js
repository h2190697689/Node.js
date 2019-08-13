const querystring=require("querystring");


// querystring.parse(str[, sep[, eq[, options]]])

// 1. str：需要解析的查询字符串
// 2. sep：多个键值对之间的分隔符，默认为&
// 3. eq：键名与键值之间的分隔符，默认为=
// 4. options：配置对象，它有两个属性，decodeURIComponent属性是一个函数，用来将编码后的字符串还原，默认是querystring.unescape()，maxKeys属性指定最多解析多少个属性，默认是1000，如果设为0就表示不限制属性的最大数量。
querystring.parse(str,";",":");