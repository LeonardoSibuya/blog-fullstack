import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface ResultsPosts {
  id: number
  title: string
  description: string
  update_on: string
  created_on: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/'
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<ResultsPosts[], void>({
      query: () => 'posts/'
    }),
    getPostsId: builder.query<ResultsPosts, void>({
      query: () => `posts/`
    }),
    createPost: builder.mutation<ResultsPosts, Partial<ResultsPosts>>({
      query: (newPost) => ({
        url: 'posts/',
        method: 'POST',
        body: newPost
      })
    }),
    updatePost: builder.mutation<
      ResultsPosts,
      { id: number; data: Partial<ResultsPosts> }
    >({
      query: ({ id, data }) => ({
        url: `posts/${id}/`,
        method: 'PUT',
        body: data
      })
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `posts/${id}/`,
        method: 'DELETE'
      })
    })
  })
})

export const {
  useCreatePostMutation,
  useDeletePostMutation,
  useGetPostsQuery,
  useUpdatePostMutation,
  useGetPostsIdQuery
} = api

export default api
