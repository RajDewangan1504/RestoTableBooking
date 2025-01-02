import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {id: 1, title: "Burger", image:"./images/dish-1.png", rating: 5, price: 15.99},
  {id: 2, title: "Naggets", image:"./images/dish-2.png", rating: 4, price: 12.99},
  {id: 3, title: "Chicken Grill", image:"./images/dish-3.png", rating: 5, price: 20.99},
  {id: 4, title: "Pizza ", image:"./images/dish-4.png", rating: 5, price: 13.99},
  {id: 5, title: "Cookie ", image:"./images/dish-5.png", rating: 5, price: 11.99},
  {id: 6, title: "Chicken Legs ", image:"./images/dish-6.png", rating: 4, price: 12.99},
]
const popularDishesSlice = createSlice({
  name: "popularDishesSlice",
  initialState,
  // reducers: {
  
  // }
});

// export const {} = popularDishesSlice.actions
export default popularDishesSlice.reducer