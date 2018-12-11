const clickUserAction = function(user){
    console.log(user.first);

    return({
        type:"User_Clicked",
        payload: user
    })
}

export default clickUserAction;