import { createSlice,PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  username: string,
}

const initialState: UserState = {
  username: 'anon'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUsername } = userSlice.actions
export default userSlice.reducer