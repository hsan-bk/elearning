import { configureStore } from '@reduxjs/toolkit';
import  userSlice  from './Slices/userSlice';
import courseSlice from './Slices/courseSlice';
import tagSlice from './Slices/tagSlice';
import reviewSlice from './Slices/reviewSlice';
import lessonSlice from './Slices/lessonSlice';
import quizSlice from './Slices/quizSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    course: courseSlice,
    tag: tagSlice,
    review: reviewSlice,
    lesson: lessonSlice,
    quiz: quizSlice,
  },
})