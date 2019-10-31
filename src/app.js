let express = require('express');
let path = require('path');
let getIssLocation = require('../utils/getIssLocation');
let hbs =  require('hbs');

let app = express();
let port = process.env.PORT || 3000


let pathToPublic = path.join(__dirname,'../public');
let viewsPath = path.join(__dirname,'../tamplets/views');
let partialPath = path.join(__dirname,'../tamplets/partials');


app.use(express.static(pathToPublic));
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialPath);

app.get('/',(req,res)=>{
    res.render('index',{
        title:'an ISS api'
    });
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/contact',(req,res)=>{
    res.render('contact');
})

app.get('/iss',(req,res)=>{
    getIssLocation((err,data)=>{
    if(err){
        return res.send(err);
    }
    res.send(data);
})
})

app.get('*',(req,res)=>{
    res.render('notFound');
})
app.listen(port,()=>{
    console.log("haa....haaa.... sun rha hu yrrrr "+port+" pe!!!!!");
})


