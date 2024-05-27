const express = require ('express') ;
const app = express() ;
app.listen(3000) ;
const lyouma = new Date () 
//console.log(lyouma)
const nhar = lyouma.getDay()
//console.log(nhar)
const wa9t = lyouma.getHours();
//console.log(wa9t)
const condition = (nhar>=1 && nhar<=5) && (wa9t >=9 && wa9t<=17)
function available (req,res,next){
    if (condition) {
       
        return  res.sendFile('sakarna.html',{root : __dirname}) ;

     }
     next()
 }

app.use(available) ;

app.get('/home', (req,res)=>{
res.sendFile('Home.html', {root : __dirname}) ;
}) ;
app.get('/services',(req , res )=>{
res.sendFile('services.html',{root : __dirname})
}) ;
app.get('/contact',(req , res )=>{
    res.sendFile('contact.html',{root : __dirname})
    }) ;
    app.get('/complaint',(req , res )=>{
        res.sendFile('complaint.html',{root : __dirname})
        }) ;
