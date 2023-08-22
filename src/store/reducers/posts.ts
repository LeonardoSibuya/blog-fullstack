import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ResultsPosts } from '../../services/api'

type PostsState = {
  items: ResultsPosts[]
}

const initialState: PostsState = {
  items: []
}

const PostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    deletePost: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((post) => post.id !== action.payload)
    },
    edit: (state, action: PayloadAction<ResultsPosts>) => {
      const indexPost = state.items.findIndex(
        (post) => post.id === action.payload.id
      )

      if (indexPost >= 0) {
        state.items[indexPost] = action.payload
      }
    },
    create: (state, action: PayloadAction<ResultsPosts>) => {
      state.items.push(action.payload)
    }
  }
})

export const { deletePost, edit, create } = PostSlice.actions

export default PostSlice.reducer
