const express = require('express');
const app = express();

const TimeServer=(req,res,next)=>{
    const time = new Date();
    const day= time.getDay();
    const hour= time.getHours();
    
    if ((day>=1 && day<=5) && (hour>=9 && hour<=17) ){
        next()
    }
    else
    {
        res.sendFile(__dirname + '/views/error.html')
    }
}

app.use(TimeServer)

app.get('/', (req,res)=>{
    res.sendFile(__dirname+ '/views/home.html')
})

app.get('/contact', (req,res)=>{
    res.sendFile(__dirname+ '/views/contact.html')
})

app.get('/service', (req,res)=>{
    res.sendFile(__dirname+ '/views/service.html')
})

app.get('/style/home.css',(req,res)=>{
    res.sendFile(__dirname+'/views/style/home.css')
})

app.get('/style/contact.css',(req,res)=>{
    res.sendFile(__dirname+'/views/style/contact.css')
})

app.get('/style/service.css',(req,res)=>{
    res.sendFile(__dirname+'/views/style/service.css')
})


const Port = 7000;
app.listen(Port,err=> err? console.log(err) : console.log(`server is running on ${Port}`))