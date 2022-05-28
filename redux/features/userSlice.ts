import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { loginUser as loginUserAction } from '../actions/userActions'
import { verifyUser } from '../actions/userActions'
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
      state.data = action.payload
      state.authenticated = true
      state.token = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      // state = action.payload
    })
    builder.addCase(verifyUser.fulfilled, (state: any, action) => {
      console.log(action.payload)
      state = action.payload
    })
  }
})

// Action creators are generated for each case reducer function
export const { setUsername, loginUser,  } = userSlice.actions
export default userSlice.reducer