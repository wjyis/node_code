let express = require('express')
let app = express()

app.use('/public', express.static('public'));

// 主页输出hello,world
app.get('/', function (req, res){
    console.log('主页GET请求');
    res.sendFile(__dirname + '/' + 'index.html');
})

app.get('/process_get', function(req, res){
    let responses = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(responses);
    res.send(JSON.stringify(responses));
})

// post请求
app.post('/', function(req,res){
    console.log('主页post请求');
    res.send('hello post');
})

// del_user页面响应
app.get('/del_user', function(req, res){
    console.log('/del_user响应 DELETE 请求');
    res.send('删除页面');
})

// list_user页面GET请求
app.get('/list_user', function(req, res){
    console.log('/list_user GET 请求');
    res.send('用户列表页面');
})

// 对ab*cd 页面响应 GET 请求
app.get('/ab*cd', function(req, res){
    console.log('/ab*cd GET 请求');
    res.send('正则匹配');
})


let server = app.listen(8081,function(){
    let port = server.address().port

    console.log("访问地址为 http://localhost:%s" ,port)
})