import { DefaultTheme } from "@react-navigation/native"

export const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors, 
    primary: 'purple',
    text: 'green'
  }
}