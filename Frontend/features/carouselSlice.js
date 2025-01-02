import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {id: 1, img: "./images/home-img-1.png", title: "Spicy Noodles"},
  {id: 2, img: "./images/home-img-2.png", title: "Fried Chicken"},
  {id: 3, img: "./images/home-img-3.png", title: "Hot Pizza"},
]

const carouselSlice = createSlice({
  name: "carouselSlice",
  initialState,
  // reducers: {
  
  // }
});

// export const {} = carouselSlice.actions
export default carouselSlice.reducer