
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  user: {},
  isEditName: false

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
      state.user = {};
    },

    setUser: (state, action) => {
      state.user = action.payload;

    },

    editUser: (state, action) => {
      state.isEditName = action.payload;
    }

  }
})

export const { login, logout, setUser, editUser } = authSlice.actions

export default authSlice.reducer

export const selectToken = state => state.auth.token
export const selectUser = state => state.auth.user
export const edit = state => state.auth.isEditName
