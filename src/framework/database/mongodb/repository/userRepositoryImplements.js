import User from "../models/user.js";

const userRepositoryImplements = ()=>{

    const viewAllUsers = async ()=>{
        const users = await User.find();
        return users
    }

    const addNewUser = async(userEntity)=>{
        const user= new User(userEntity);
        const newUser=user.save()
        return newUser
    };

    return{
        viewAllUsers,addNewUser
    }
}

export default userRepositoryImplements