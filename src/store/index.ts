import { configureStore } from '@reduxjs/toolkit'

import postReducer from './reducers/posts'
import filterReducer from './reducers/filtros'
import api from '../services/api'

const store = configureStore({
  reducer: {
    posts: postReducer,
    filter: filterReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
