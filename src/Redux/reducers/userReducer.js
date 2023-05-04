
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  user: {},
  //firstName: "",
  //lastName: "",
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {

      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
    },
    setUser: (state, action) => {

      state.user = action.payload;
    },
    /*setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    }*/
  }
})

export const { login, logout, setFirstName, setLastName } = authSlice.actions

export default authSlice.reducer

export const selectToken = state => state.auth.token
export const user = state => state.auth.user
