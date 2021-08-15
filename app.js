//create handle the server side from here
const express = require('express')

const app = express()
app.set('view enigne','ejs')

app.get('/',(req,res) =>
{
    res.render('home_page.ejs')  
})

app.listen(3000,(err)=>
{
    if(err)
    {
        console.log(err)
    }
    else{console.log('success !')}
})