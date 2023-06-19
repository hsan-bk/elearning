import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

//get all
export const getall_quizs= createAsyncThunk("quiz/get_all", async()=>{
    try {
        let result= axios.get("http://localhost:5000/quiz/all_quizs");
        return result;
    } catch (error) {
        console.log(error)
    }
})

//get one
export const getone_quiz= createAsyncThunk("quiz/get_one", async(id)=>{
    try {
        let result= axios.get(`http://localhost:5000/quiz/quiz/${id}`);
        return result;
    } catch (error) {
        console.log(error)
    }
})

//add
export const addquiz = createAsyncThunk("quiz/add", async (quiz) => {
  try {
    let result = axios.post("http://localhost:5000/quiz/new_quiz", quiz);
    return result;
  } catch (error) {
    console.log(error);
  }
});

//delete
export const deletequiz = createAsyncThunk("quiz/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/quiz/delete/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

//update
export const editquiz = createAsyncThunk("quiz/edit", async ({id, edited}) => {
  try {
    let result = axios.put(`http://localhost:5000/quiz/update/${id}`, edited);
    return result;
  } catch (error) {
    console.log(error);
  }
});


const initialState = {
  quizlist: null,
  status: null,
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
  },
  extraReducers:{
    //state get all
    [getall_quizs.fulfilled]: (state, action) => {
        state.status = "success";
        state.quizlist = action.payload.data.allquizs;},
    [getall_quizs.pending]: (state) => {
        state.status = "pending";
      },
    [getall_quizs.rejected]: (state) => {
        state.status = "rejected";
      },

    //state get one
    [getone_quiz.fulfilled]: (state, action) => {
        state.status = "success";
        state.quizList = action.payload.data.onequiz;},
    [getone_quiz.pending]: (state) => {
        state.status = "pending";
      },
    [getone_quiz.rejected]: (state) => {
        state.status = "rejected";
      },
 
// state add
    [addquiz.fulfilled]: (state, action) => {
        state.status = "success";
      },
    [addquiz.pending]: (state) => {
        state.status = "pending";
      },
    [addquiz.rejected]: (state) => {
        state.status = "rejected";
      },

// state delete
      [deletequiz.fulfilled]: (state, action) => {
        state.status = "success";
      },
      [deletequiz.pending]: (state) => {
        state.status = "pending";
      },
      [deletequiz.rejected]: (state) => {
        state.status = "rejected";
      },

//state update
      [editquiz.fulfilled]: (state, action) => {
        state.status = "success";
      },
      [editquiz.pending]: (state) => {
        state.status = "pending";
      },
      [editquiz.rejected]: (state) => {
        state.status = "rejected";
      },

  }
})

export default quizSlice.reducer