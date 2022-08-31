const initState = [];

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "update_user":
      let userDetails = action.payload;
      return userDetails;
    case "logout":
      return [];
    default:
        return state;
  }
};


export default reducer;
