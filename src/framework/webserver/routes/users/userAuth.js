import userController from "../../../../controllers/userControllers.js";
import userRepositoryImplements from "../../../database/mongodb/repository/userRepositoryImplements.js";
import userRepositoryInterface from "../../../../application/repositories/userRepository.js";

const  userAuthRouter = (express)=>{
    const router=express.Router();
    
    const controller=userController(userRepositoryInterface,userRepositoryImplements)

    router.get('/',controller.viewAllUsers)
    router.post('/:id',controller.AddNewUser)

    return router
} 

export default userAuthRouter