const express = require('express');
const port = '5000';
const app = express();

const users = [
	{
		'username':'admin',
		'password':'user'
	},
	{
		'username':'hello',
		'password':'world'
	},
	{
		'username':'dennis',
		'password':'durano'
	},
	{
		'username':'julio',
		'password':'so'
	},
];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

app.get('/userlist',(req,res)=>{
	return res.json(users).status()
})

app.post('/login',(req,res)=>{
	let data = req.body;
	let values = Object.values(data);
	let message = "Login Failed";
	users.forEach((user)=>{
		let userdata = Object.values(user);
		if(userdata[0] == values[0] && userdata[1] == values[1]){
			message = "Login Accepted"
		}
	});
	return res.json(message).status(200);
})

app.get('/',(req,res)=>{
	res.render('index.html')
});

const server = app.listen(port,()=>{
	console.log('listening at port:'+port);
});