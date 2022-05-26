import { userConstants } from "../actions/constants";

const initState = {
    audioList:'',
};



export default (state = initState, action) => {
  console.log("hello action",action.payload?.audioList);


  switch (action.type) {
      
    case userConstants.USER_ADD_LIST:
      state = {...state,audioList:action.payload.audioList}
      break;
    
  }

  return state;
};
