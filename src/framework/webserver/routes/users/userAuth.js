const  userAuthRouter = (express)=>{
    const router=express.Router();
    
    router.get('/',(req,res)=>{
        console.log("hai da");
        res.send("ivda vada")
    })
    return router
}

export default userAuthRouter