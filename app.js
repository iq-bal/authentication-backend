const express = require('express')
const app = express()

app.use(middleware2)
app.use(nextMiddleware1) 

//app.use expects a function or middle ware that it can execute.. global middleware... the other one is route specific middleware 
//order of the middleware matters 

function nextMiddleware1(req,res,next){
    console.log('i am a middleware 1');
    next(); // without it 2nd middleware would never run
}

// req, res is two default object we are provided with by express
// next is a function ... likewise

function middleware2(req,res,next){
    console.log('i am middleware 2')
    next(); 
}

function middleware3(req,res,next){
    console.log('i am middleware 3')
    next(); 
}

// function errorHandler(err,req,res,next){
//      if(err){
//         res.send('<h1>there is was an error</h1>')
//      }
// }

function standardExpressCallback(reuqestObject,responseObject,nextMiddleware){
    console.log('i am the standard express function')
    responseObject.send('<h1>hello world</h1>'); 
}

app.get('/',middleware3,standardExpressCallback)

app.listen(3000);