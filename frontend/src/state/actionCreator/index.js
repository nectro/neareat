export const setUser=(userId, name, email)=>{
    return (dispatch) => {
        dispatch({
            type: "set_user",
            payload:{
                userId:userId,
                name:name,
                email:email,
            }
        });
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({
            type: "logout_user",
            payload: null
        });
    }
}