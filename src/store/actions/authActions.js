export const SET_USER_DATA = 'SET_USER_DATA';

export const setUserData = (token, type) => {
  return {
    type: SET_USER_DATA,
    payload: { token, type },
  };
};
