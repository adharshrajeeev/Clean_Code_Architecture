import { addNewUser } from "../application/user_Cases/users/createNewUser.js";
import { findAll } from "../application/user_Cases/users/findAll.js";

const userController = (userRepositoryInterface,userRepositoryImplements)=>{
    const repository= userRepositoryInterface(userRepositoryImplements())


    //GET ALL USERS
    const viewAllUsers = async(req,res,next)=>{
        try{
            const allUsers = await findAll(repository);
            res.json(allUsers)
        }catch(err){
            console.log(err)
        }
    }

    //ADD NEW USER
    const AddNewUser = async(req,res,next)=>{
        try{
            const {userName,email,password}=req.body;
            const newUser = await addNewUser(userName,email,password,repository);
            res.status(200).json(newUser);
        }catch(err){
            console.log(err)
        }
    }

    return { viewAllUsers,AddNewUser }
}


export default userController