import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  titlePostSearch?: string
}

const initialState: FiltroState = {
  titlePostSearch: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    searchPosts: (state, action: PayloadAction<string>) => {
      state.titlePostSearch = action.payload
    }
  }
})

export const { searchPosts } = filtroSlice.actions

export default filtroSlice.reducer
