//http://nodejs.org/api/fs.html
var fs = require('fs');
//1.创建并写入文件
var stream = fs.createWriteStream("my_file.txt");
stream.once('open', function(fd) {
  stream.write("My first row\n");
  stream.write("My second row\n");
  stream.end();
});
//2.读取数据
//http://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback
fs.readFile("my_file.txt",'utf-8', function (err, data) {
  if (err) throw err;
  console.log(data);
});
//3.遍历当前目录
fs.readdir('.', function (err, files) {
  if (err) throw err;
  for (var idx  in files){
	console.log(files[idx]);	
  }  
});
//4.check dir or file  exist & Create
var dir = 'demoDir';
if (!fs.existsSync(dir)) { 
	//https://github.com/joyent/node/issues/1999
	//mode:创建文件夹默认权限设置
	fs.mkdirSync(dir, 0777);
 }

