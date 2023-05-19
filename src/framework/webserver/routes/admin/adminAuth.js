 const  adminAuthRouter = (express)=>{
    const router=express.Router();
    router.get('/',(req,res)=>{
        res.send("THIS IS ADMIN DA")
    })
    return router
}
export default adminAuthRouter