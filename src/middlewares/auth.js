 const adminAuth = (req,res,next)=>{
    console.log("Admin auth is getting checked||");
    const token ="ppp9o998uuyy";

    const isAdminAuthorized =token  ==="xyz";

    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized request")
    }
    else{
        next()
    }
    
}
module.exports={
    adminAuth
}