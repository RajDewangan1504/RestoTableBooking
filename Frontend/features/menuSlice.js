import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  menu: []
}
const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    initMenu: (state, action) => {
      state.menu = action.payload;
    }
  }
});

export const {initMenu} = menuSlice.actions
export default menuSlice.reducer