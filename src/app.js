const express = require ('express');

const app = express(); 


app.use("/test",(req,res)=>{
    res.send("hello from the server")
})

app.use("/test1",(req,res)=>{
    res.send("testing again")
})

app.use("/helloo",(req,res)=>{
    res.send("helo hello ")
})

app.listen(3012, ()=>{
    console.log("server is  successfully listening on port 3012...");
    
});




