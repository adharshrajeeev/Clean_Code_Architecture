import UserEntity from "../../../entities/userEntity.js";

export const addNewUser = async(userName,password,email,userRepositoryInterface)=>{

    const userEntity= new UserEntity(userName,password,email)
   return await userRepositoryInterface.addNewUser(userEntity);
}

export default addNewUser