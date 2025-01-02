import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {id: 1, name: "John Doe", img: './images/pic-1.png', rate: 4, testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni."},
  {id: 2, name: "Madge Burke", img: './images/pic-2.png', rate: 5, testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni."},
  {id: 3, name: "Mason Sean", img: './images/pic-3.png', rate: 5, testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni."},
  {id: 4, name: "Christine Lya", img: './images/pic-4.png', rate: 4, testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni."},
]

const reviewsSlice = createSlice({
  name: "reviewSlice",
  initialState,
  // reducers: {
  
  // }
});

// export const {} = reviewsSlice.actions
export default reviewsSlice.reducer