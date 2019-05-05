const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/src', express.static(path.join(__dirname, '../src')));
app.use((err,req,res,next)=>{
    console.log(err.name, err.message)
    res.status(418).send("error!")
});


app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(3000, ()=>{console.log('listening on 3k')});
