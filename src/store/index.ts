import { configureStore } from '@reduxjs/toolkit'

import postReducer from './reducers/posts'

const store = configureStore({
  reducer: {
    posts: postReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
