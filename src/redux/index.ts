import {configureStore} from "@reduxjs/toolkit"
import menuReducer from "./menuSlice"
import pageReducer from "./pageSlice"
import categoriesReducer from "./categoriesSlice"

const store = configureStore({
  reducer: {
    menu: menuReducer,
    page: pageReducer,
    categories: categoriesReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch