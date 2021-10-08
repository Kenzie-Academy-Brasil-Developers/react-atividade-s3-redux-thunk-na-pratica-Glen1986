import {ADD_COMMENT} from "./actionTypes";

const initialState = {name: "Kenzie", comments: []};

const userReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_COMMENT:
      const {updatedUser} = action;


      // Lembre de fluxo da aula anterior, essa action chega aqui depois de passar pelo thunks
      return updatedUser;
    default:
      return state;
  }
};

export default userReducer;
