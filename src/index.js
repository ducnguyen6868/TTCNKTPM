const express= require("express");
const port= 3000;
const path= require("path");
const handlebars=require( "express-handlebars");
const bodyParser = require('body-parser');
const app =  express();
app.use(express.static(path.join(__dirname, 'public')))
console.log(path.join(__dirname));
app.use(express.urlencoded({
  extended: true
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))
app.get("/",(req,res)=>{
    res.render("homepage")
    })
app.listen(port,()=>{console.log(`Server is running on ${port}`)})