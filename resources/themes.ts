import { DefaultTheme } from "@react-navigation/native"

export const DarkTheme = {
  ...DefaultTheme,
  colors: {
    // ...DefaultTheme.colors, 
    primary: 'lightgrey',
    text: '#e7e7e7',
    border: 'lightgrey',
    background: '#303030',
    card: '#4a4a4a',
    oopla: 'black',
    notification: 'grey',
    secondary: 'grey',
  }
}

export const LightTheme = {
  dark: false,

  colors: {
    ...DefaultTheme.colors,
    background: "white",
    primary: 'lightblue', 
    secondary: 'lightgrey',
    text: 'black',
    border: 'grey',
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