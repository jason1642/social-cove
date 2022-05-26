import { DefaultTheme } from "@react-navigation/native"

export const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors, 
    primary: 'purple',
    text: 'green'
  }
}

export const LightTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: 'purple', 
    text: 'red'
  }
}



// Available values for themes - example:
// You must provide all of these properties
// colors: {
//  primary: 'red',
//  background: 'blue',
//  card: 'purple',
//  border: 'grey',
//  notification: 'teal',
// },
// 