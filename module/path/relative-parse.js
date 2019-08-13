// path.relative
// 接受两个参数，这两个参数都应该是绝对路径。该方法返回第二个路径相对于第一个路径的那个相对路径。
path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')

// path.parse()
var myFilePath = '/someDir/someFile.json';
path.parse(myFilePath).base
// "someFile.json"
path.parse(myFilePath).name
// "someFile"
path.parse(myFilePath).ext
// ".json"