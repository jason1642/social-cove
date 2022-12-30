// import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import reducers from './reducers/index';
import userReducer from './features/userSlice'
import colorThemeReducer from './features/colorThemeSlice'


export const store = configureStore({
  reducer: {
    user: userReducer,
    colorTheme: colorThemeReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch