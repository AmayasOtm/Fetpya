//create handle the server side from here
const express = require('express')

const app = express()
app.use(express.static('public'))
app.set('view enigne','ejs')

app.get('/',(req,res) =>
{
    res.render('home_page.ejs')  
})

app.get('/login',(req,res) =>
{
    res.render('login.ejs')  
})
app.get('/register',(req,res) =>
{
    res.render('register.ejs')  
})
app.get('/user/id',(req,res) =>
{
    res.render('user.ejs')  
})
app.listen(3000,(err)=>
{
    if(err)
    {
        console.log(err)
    }
    else{console.log('success !')}
})