import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import PostsClass from '../../models/Post'

type PostsState = {
  items: PostsClass[]
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
    edit: (state, action: PayloadAction<PostsClass>) => {
      const indexPost = state.items.findIndex(
        (post) => post.id === action.payload.id
      )

      if (indexPost >= 0) {
        state.items[indexPost] = action.payload
      }
    },
    create: (state, action: PayloadAction<PostsClass>) => {
      state.items.push(action.payload)
    }
  }
})

export const { deletePost, edit, create } = PostSlice.actions

export default PostSlice.reducer
