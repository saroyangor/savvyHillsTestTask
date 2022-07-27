import {createSlice, PayloadAction} from "@reduxjs/toolkit"

type MenuState = {
  active: boolean
}

const initialState: MenuState = {
  active: false
}

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleActive(state, action: PayloadAction<boolean>) {
      state.active = action.payload
    }
  }
})

export const {toggleActive} = menuSlice.actions

export default menuSlice.reducer