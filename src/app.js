const express = require ('express');

const app = express(); 

// // /will work for getAi
// app.get("/getAp?i",(req,res)=>{
//     res.send({firstname: "Soma"})
// })

// ///Can add as many b as wanted
// app.get("/ab+c",(req,res)=>{
//     res.send({firstname: "Soma"})
// })
// //Any where a commes in url , rgx will work
// app.get("/a/",(req,res)=>{
//     res.send({firstname: "Soma"})
// })

// app.use("/test",(req,res)=>{
//     res.send("hello from the server")
// })

// app.use("/test1",(req,res)=>{
//     res.send("testing again")
// })

// app.use("/helloo",(req,res)=>{
//     res.send("helo hello ")
// })
// app.use("/",(req,res)=>{
//     res.send("WElcome")
// })



app.use("/user",
    (req,res, next)=>{
           
    console.log("Handling the route user!!");
    // res.send("Response !!");
    next();
 
    
},
(req,res,next)=>{
    console.log("Handling the route user2222222!!");
    // res.send("Response222222 !!")
      next();
    
},
(req,res,next)=>{
    console.log("Handling the route user333!!");
    // res.send("Response333 !!")
      next();
    
},
)

app.listen(3012, ()=>{
    console.log("server is  successfully listening on port 3012...");
    
});




