import { configureStore } from '@reduxjs/toolkit'

import postReducer from './reducers/posts'
import filterReducer from './reducers/filtros'

const store = configureStore({
  reducer: {
    posts: postReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
