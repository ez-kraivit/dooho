// Const
const express = require('express')
const http = require('http');
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8100
// App
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,'/public')))
app.set('view engine', 'ejs')
app.set('views','views')

// Value
const loginUser = []
// App get
// app.get('/',(req,res) =>{
//     res.send('Hello World')
// })

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'login.html'))
})

app.post('/login',(req,res)=>{
    console.log('username : '+req.body.username)
    console.log('password :'+req.body.password)
    var username = req.body.username
    var password = req.body.password
    loginUser.push({user:username,pass:password})
    console.log([loginUser])
    res.redirect('/home')
})

app.get('/home',(req,res) =>{
    res.send('Hello World')
})

app.get('*',(req,res)=>{
    res.json({
        message:'Error'
    })
})

// app.get('/',(req,res) =>{
//     res.sendFile(path.join(__dirname,'home.html'))
// })


// app.get('/about',(req,res) =>{
//     res.sendFile(path.join(__dirname,'about.html'))
// })

// app.get('/register',(req,res) =>{
//     res.render('register',{users:registeredUsers})
// })

// app.get('/upload',(req,res) =>{
//     res.sendFile(path.join(__dirname,'upload.html'))
// })


// app.get('/query',(req,res) =>{
//     res.sendFile(path.join(__dirname,'query.html'))
// })

// app.get('/books',(req,res) => {
//     res.json(books)
// })

// app.get('/sending',(req,res)=>{
//     console.log(req.query.status)
//     res.redirect('/')
// })

// Start Server run
http.createServer(app).listen(process.env.PORT,function(){
    console.log('Start Server At port ${PORT}')
})
// app.listen(3000,()=>{
//     console.log('Start server at port 3000')
// })