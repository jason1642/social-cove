import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react-test-renderer'
import { editUser, loginUser as loginUserAction } from '../actions/userActions'
import { verifyUser } from '../actions/userActions'
export interface UserState {
  data: any,
  authenticated: boolean,
  token: string | undefined,
  isLoading?: boolean,
  error?: any,
}

const initialState: UserState = {
  data: undefined,
  authenticated: false,
  token: undefined,
  isLoading: false,
  error: undefined,
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
    builder.addCase(loginUserAction.fulfilled, (state: any, action) => {
      state = action.payload

      return ({...state, isLoading: false})
    })
    builder.addCase(verifyUser.pending, (state: any, action) => {
      // console.log('Pending...')
      state.isLoading = true
      // console.log(state)
      return state
    })
    builder.addCase(verifyUser.fulfilled, (state: any, action) => {
      // console.log(action.payload)
      // console.log('No longer pendings...')
      state = action.payload
      return ({...state, isLoading: false,})
    })
    builder.addCase(editUser.fulfilled, (state: any, action) => {
      console.log('Finished editing user')
      // console.log(action.payload, 'This is the edit user builder case')
      state = { ...state, ...action.payload, isLoading: false }
      state.data= action.payload
      return ({ ...state, ...action.payload, isLoading: false})
    })
    builder.addCase(editUser.pending, (state: any, action) => {
      console.log('Attempting to edit user')
      console.log(action)
      return ({...state, isLoading: true})
    })
    builder.addCase(editUser.rejected, (state: any, action: any) => { 
      console.log("edit user Rejected!!")
      console.log(action)
      return ({...state, error: action.payload.error, isLoading: false})
    })
  }
})

// Action creators are generated for each case reducer function
export const { setUsername, loginUser,  } = userSlice.actions
export default userSlice.reducer