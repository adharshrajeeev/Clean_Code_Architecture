const userRepositoryInterface = (repository)=>{
    const viewAllUsers = ()=>repository.viewAllUsers();

    const addNewUser= (userEntity)=>{
        return repository.addNewUser(userEntity)
    }
    return {
        viewAllUsers,addNewUser
    }
}

export default userRepositoryInterface