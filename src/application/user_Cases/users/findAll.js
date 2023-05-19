export const findAll = async (userRepositoryInterface)=>{
    await userRepositoryInterface.viewAllUsers();
}

export default findAll