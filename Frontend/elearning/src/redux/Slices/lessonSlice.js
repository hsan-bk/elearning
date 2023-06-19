import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

//get all
export const getall_lessons= createAsyncThunk("lesson/get_all", async()=>{
    try {
        let result= axios.get("http://localhost:5000/lesson/all_lessons");
        return result;
    } catch (error) {
        console.log(error)
    }
})

//get one
export const getone_lesson= createAsyncThunk("lesson/get_one", async(id)=>{
    try {
        let result= axios.get(`http://localhost:5000/lesson/lesson/${id}`);
        return result;
    } catch (error) {
        console.log(error)
    }
})

//add
export const addlesson = createAsyncThunk("lesson/add", async (lesson) => {
  try {
    let result = axios.post("http://localhost:5000/lesson/new_lesson", lesson);
    return result;
  } catch (error) {
    console.log(error);
  }
});

//delete
export const deletelesson = createAsyncThunk("lesson/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/lesson/delete/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

//update
export const editlesson = createAsyncThunk("lesson/edit", async ({id, edited}) => {
  try {
    let result = axios.put(`http://localhost:5000/lesson/update/${id}`, edited);
    return result;
  } catch (error) {
    console.log(error);
  }
});


const initialState = {
  lessonlist: null,
  status: null,
}

export const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {
  },
  extraReducers:{
    //state get all
    [getall_lessons.fulfilled]: (state, action) => {
        state.status = "success";
        state.lessonlist = action.payload.data.alllessons;},
    [getall_lessons.pending]: (state) => {
        state.status = "pending";
      },
    [getall_lessons.rejected]: (state) => {
        state.status = "rejected";
      },

    //state get one
    [getone_lesson.fulfilled]: (state, action) => {
        state.status = "success";
        state.lessonlist = action.payload.data.onelesson;},
    [getone_lesson.pending]: (state) => {
        state.status = "pending";
      },
    [getone_lesson.rejected]: (state) => {
        state.status = "rejected";
      },
 
// state add
    [addlesson.fulfilled]: (state, action) => {
        state.status = "success";
      },
    [addlesson.pending]: (state) => {
        state.status = "pending";
      },
    [addlesson.rejected]: (state) => {
        state.status = "rejected";
      },

// state delete
      [deletelesson.fulfilled]: (state, action) => {
        state.status = "success";
      },
      [deletelesson.pending]: (state) => {
        state.status = "pending";
      },
      [deletelesson.rejected]: (state) => {
        state.status = "rejected";
      },

//state update
      [editlesson.fulfilled]: (state, action) => {
        state.status = "success";
      },
      [editlesson.pending]: (state) => {
        state.status = "pending";
      },
      [editlesson.rejected]: (state) => {
        state.status = "rejected";
      },

  }
})

export default lessonSlice.reducer