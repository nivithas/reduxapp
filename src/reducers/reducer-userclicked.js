export default function(state =null,action){
    switch(action.type){
        case "User_Clicked":
            console.log("action is received in reducer")
            console.log(action.payload)
            return action.payload
        default:
             break;
    }
    return state
}