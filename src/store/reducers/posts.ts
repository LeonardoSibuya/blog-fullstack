import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PostsProps } from '../../components/Posts'

type PostsState = {
  items: PostsProps[]
}

const initialState: PostsState = {
  items: [
    {
      id: 1,
      titlePost: 'Buy a Car',
      description:
        'teste teste teste testeteste testeteste testeteste testeteste testeteste testeteste testeteste teste',
      date: '16/08/2023'
    },
    {
      id: 2,
      titlePost: 'Passeio no shopping',
      description:
        'teste teste teste testeteste testeteste testeteste testeteste testeteste testeteste testeteste teste',
      date: '24/09/2023'
    }
  ]
}

const PostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    deletePost: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((post) => post.id !== action.payload)
    },
    edit: (state, action: PayloadAction<PostsProps>) => {
      const indexPost = state.items.findIndex(
        (post) => post.id === action.payload.id
      )
      if (indexPost >= 0) {
        state.items[indexPost] = action.payload
      }
    },
    create: (state, action: PayloadAction<PostsProps>) => {
      const postAlredyExists = state.items.find(
        (post) =>
          post.titlePost.toLowerCase() ===
          action.payload.titlePost.toLowerCase()
      )

      if (postAlredyExists) {
        alert('This title alredy exists')
      } else {
        state.items.push(action.payload)
      }
    }
  }
})

export const { deletePost, edit, create } = PostSlice.actions

export default PostSlice.reducer
