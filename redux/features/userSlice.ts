import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { loginUser } from '../actions/userActions'

export interface UserState {
  data: any,
  authenticated: boolean,
  token: string | undefined
}

const initialState: UserState = {
  data: undefined,
  authenticated: false,
  token: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.data = action.payload
    }, 
    loginUser: (state, action: PayloadAction<string>) => {
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state = action.payload
    })
  }
})

// Action creators are generated for each case reducer function
export const { setUsername } = userSlice.actions
export default userSlice.reducer