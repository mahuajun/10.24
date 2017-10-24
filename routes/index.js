var express = require('express');
var router = express.Router();
var fs = require('fs');
var num=0;
var mun=0;
/* GET home page. */
router.get('/', function(req, res, next) {
	num++;
	fs.readFile('public/mhj.txt','utf-8',function(err,data){
		if (err) {
			console.log(err)
		} else{
			console.log(data)
			fs.writeFile('public/mhj.txt','index页面被访问的次数：'+num,function(err){
				if(err){
					console.log(err)
				}
			})
			res.render('index', { title: data});
		}
	})

});

router.get('/index2', function(req, res, next) {
	mun++;
	fs.readFile('public/mhj2.txt','utf-8',function(err,data){
		if (err) {
			console.log(err)
		} else{
			console.log(data)
			fs.writeFile('public/mhj2.txt','mhj页面:'+mun,function(err){
				if(err){
					console.log(err)
				}
			})
			res.render('index2', { title: data});
		}
	})

});

module.exports = router;
