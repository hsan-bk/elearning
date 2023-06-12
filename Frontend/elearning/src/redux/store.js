import { configureStore } from '@reduxjs/toolkit';
import  userSlice  from './Slices/userSlice';
import courseSlice from './Slices/courseSlice';
import tagSlice from './Slices/tagSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    course: courseSlice,
    tag: tagSlice,
  },
})