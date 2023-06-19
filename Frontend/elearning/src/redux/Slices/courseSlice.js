import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

//get all
export const getall_course= createAsyncThunk("course/get_all", async()=>{
    try {
        let result= axios.get("http://localhost:5000/course/all_courses");
        return result;
    } catch (error) {
        console.log(error)
    }
})

//get one
export const getone_course= createAsyncThunk("course/get_one", async(id)=>{
    try {
        let result= axios.get(`http://localhost:5000/course/info/${id}`);
        return result;
    } catch (error) {
        console.log(error)
    }
})

//add
export const addcourse = createAsyncThunk("course/add", async (course) => {
  try {
    let result = axios.post("http://localhost:5000/course/new_course", course);
    return result;
  } catch (error) {
    console.log(error);
  }
});

//delete
export const deletecourse = createAsyncThunk("course/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/course/delete/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

//update
export const editcourse = createAsyncThunk("course/edit", async ({id, edited}) => {
  try {
    let result = axios.put(`http://localhost:5000/course/update/${id}`, edited);
    return result;
  } catch (error) {
    console.log(error);
  }
});


const initialState = {
  courselist: null,
  status: null,
}

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
  },
  extraReducers:{
    //state get all
    [getall_course.fulfilled]: (state, action) => {
        state.status = "success";
        state.courselist = action.payload.data.allcourses;},
    [getall_course.pending]: (state) => {
        state.status = "pending";
      },
    [getall_course.rejected]: (state) => {
        state.status = "rejected";
      },

    //state get one
    [getone_course.fulfilled]: (state, action) => {
        state.status = "success";
        state.courseList = action.payload.data.onecourse;},
    [getone_course.pending]: (state) => {
        state.status = "pending";
      },
    [getone_course.rejected]: (state) => {
        state.status = "rejected";
      },
 
// state add
    [addcourse.fulfilled]: (state, action) => {
        state.status = "success";
      },
    [addcourse.pending]: (state) => {
        state.status = "pending";
      },
    [addcourse.rejected]: (state) => {
        state.status = "rejected";
      },

// state delete
      [deletecourse.fulfilled]: (state, action) => {
        state.status = "success";
      },
      [deletecourse.pending]: (state) => {
        state.status = "pending";
      },
      [deletecourse.rejected]: (state) => {
        state.status = "rejected";
      },

//state update
      [editcourse.pending]: (state) => {
        state.status = "pending";
      },
      [editcourse.fulfilled]: (state, action) => {
        state.status = "success";
      },
      [editcourse.rejected]: (state) => {
        state.status = "rejected";
      },

  }
})

export default courseSlice.reducer