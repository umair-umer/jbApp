// reducers/authReducer.js
const initialState = {
  token: null,
  type: null,
  userId:null,

  
  // ... other state elements
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.payload.token,
        type: action.payload.type,
        userId:action.payload.userId
    
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
