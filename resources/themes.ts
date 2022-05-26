import { DefaultTheme } from "@react-navigation/native"

export const DarkTheme = {
  ...DefaultTheme,
  colors: {
    // ...DefaultTheme.colors, 
    primary: 'purple',
    text: 'green',
    border: 'blue',
    background: 'lightblue',
    card: 'orange',
    oopla: 'black',
    notification: 'grey',
  }
}

export const LightTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: "purple",
    primary: 'purple', 
    text: 'red',
    border: 'black',
  }
}



// Available values for themes - example:
// You must provide all of these properties
// colors: {
//  primary: 'red',
//  background: 'blue',
//  card: 'purple',
//  border: 'grey',
//  text: 'orange',
//  notification: 'teal',
// },
// 