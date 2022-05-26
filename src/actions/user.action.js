
import {userConstants} from './constants'

export const addFileToStore = (audioList) => {
  
  
  return async (dispatch) => {
      
  localStorage.setItem("audio_list",JSON.stringify(audioList));  

      dispatch({
        type: userConstants.USER_ADD_LIST,
        payload: { audioList : audioList},
      });

      
  };

};

