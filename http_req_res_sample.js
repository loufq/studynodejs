
var http=require('http');
var qs=require('querystring');
var cookie = '';

var post_data={time:new Date().getTime()};//这是需要提交的数据
var content=qs.stringify(post_data);
 
var options = {
  host: 'www.zhihu.com',
  port: 80,
  path: '/people/loufq',
  method: 'GET',
  headers:{
  'Cookie':cookie,
  'Content-Type':'application/x-www-form-urlencoded',
  'Content-Length':content.length
  }
};
console.log("post options:\n",options);
console.log("content:",content);
console.log("\n");
 
var req = http.request(options, function(res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);
  var _data='';
  res.on('data', function(chunk){
     _data += chunk;
  });
  res.on('end', function(){
     console.log("\n--->>\nresult:",_data)
   });
});
 
req.write(content);
req.end();
