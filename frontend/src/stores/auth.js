import { createSlice } from "@reduxjs/toolkit";
import axios from '../libs/axios';

const initialState = {
  user: null, // ユーザー情報の格納場所
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return Object.assign({}, state, { user: action.payload });
    },
  }
});
export const { setUser } = slice.actions;
// 認証済みか確認するセレクター
// export const isAuthSelector = state => state.auth.user !== null;
export function setCurrentUser() {
  return async function(dispatch) {
    const LoggedIn = await axios.get('user/current');
    if(Object.keys(LoggedIn.data).length){
      dispatch(slice.actions.setUser(LoggedIn.data));
    }
  }
}

export default slice.reducer;