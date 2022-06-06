import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ColorThemeState {
  theme: string,
}

const initialState: ColorThemeState = {
  theme: 'light',
}

export const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState, 
  reducers: {
    setColorTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
    }
  },
})

export const { setColorTheme } = colorThemeSlice.actions
export default colorThemeSlice.reducer