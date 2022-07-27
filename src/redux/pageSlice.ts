import {createSlice} from "@reduxjs/toolkit"

type PageState = {
  activePage: number
}

const initialState: PageState = {
  activePage: 1
}

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage(state) {
      state.activePage = state.activePage + 1
    }
  }
})

export const {nextPage} = pageSlice.actions

export default pageSlice.reducer