

var http=require('http');
var qs=require('querystring');
var cookie = 'q_c1=5b38148c4db146a996e8a510660a6829|1388843959000|1388843959000; zata=zhihu.com.5b38148c4db146a996e8a510660a6829.809865; _xsrf=a9fe817f18d048cbb10786fe60e04267; c_c=745a244c810511e3bdda52540a3121f7; q_c0="N2YxZmJlM2Y3MzUyNTM1OTZkN2E2MjFiMjQ5MWY1YTN8QzlJakhwdDFnUFlBdTNoVw==|1390134626|6d01ae973ac25562716f073742b5356b25ab69dc"; __utma=155987696.703935201.1390134651.1390134651.1390134651.1; __utmb=155987696.3.10.1390134651; __utmc=155987696; __utmz=155987696.1390134651.1.1.utmcsr=zhihu.com|utmccn=(referral)|utmcmd=referral|utmcct=/; __utmv=155987696.100-1|2=registration_date=20120207=1^3=entry_date=20120207=1; zatb=zhihu.com';

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