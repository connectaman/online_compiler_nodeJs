const express = require("express");
const app = express();
var compiler = require('compile-code');
var path = require('path');
const bodyParser = require('body-parser');
compiler.init();
app.set("view engine","ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/",function(req,res){
res.render("index",{result:"",err:"" , code:"",input:" "});
});

app.post("/compile",function(req,res){
	console.log(req.body);
	var lang = req.body.lang;
	var input = req.body.input || "";
	var result;
	var err;
	console.log(lang);
	console.log(input);
	switch(lang){
		case "c":
		compiler.compile(1,req.body.program,input,async (data) => {
        result = data.stdout || "No Output";
        err = data.stderr || "No Error";
    	console.log(data.stdout || "No Output");
    	console.log(data.stderr || "No Error");
	});
		break;
		case "cpp":
		 compiler.compile(2,req.body.program,input,async (data) => {
        result = data.stdout || "No Output";
        err = data.stderr || "No Error";
    	console.log(data.stdout || "No Output");
    	console.log(data.stderr || "No Error");
	});
		break;
		case "py":
		 compiler.compile(3,req.body.program,input,async (data) => {
        result = data.stdout || "No Output";
        err = data.stderr || "No Error";
    	console.log(data.stdout || "No Output");
    	console.log(data.stderr || "No Error");
	});
		break;
		case "java":
		 compiler.compile(4,req.body.program,input,async (data) => {
        result = data.stdout || "No Output";
        err = data.stderr || "No Error";
    	console.log(data.stdout || "No Output");
    	console.log(data.stderr || "No Error");
	});
		break;
	}
	console.log("---");
	console.log(result);
	console.log(err);
	console.log("---");
	res.render("index",{result:result,err:err , code:req.body.program,input:input});
});


app.listen(3000,function(){
	console.log("Server listening at port 3000");
});