
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {

      state.token = action.payload

    },
    logout: (state, action) => {
      state.token = null;

    }
  }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer

export const selectToken = state => state.auth.token