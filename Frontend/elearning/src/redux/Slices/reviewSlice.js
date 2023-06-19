import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

//get all
export const getall_reviews= createAsyncThunk("review/get_all", async()=>{
    try {
        let result= axios.get("http://localhost:5000/review/all_reviews");
        return result;
    } catch (error) {
        console.log(error)
    }
})

//get one
export const getone_review= createAsyncThunk("review/get_one", async(id)=>{
    try {
        let result= axios.get(`http://localhost:5000/review/review/${id}`);
        return result;
    } catch (error) {
        console.log(error)
    }
})

//add
export const addreview = createAsyncThunk("review/add", async (review) => {
  try {
    let result = axios.post("http://localhost:5000/review/new_review", review);
    return result;
  } catch (error) {
    console.log(error);
  }
});

//delete
export const deletereview = createAsyncThunk("review/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/review/delete/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

//update
export const editreview = createAsyncThunk("review/edit", async ({id, edited}) => {
  try {
    let result = axios.put(`http://localhost:5000/review/update/${id}`, edited);
    return result;
  } catch (error) {
    console.log(error);
  }
});


const initialState = {
  reviewlist: null,
  status: null,
}

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
  },
  extraReducers:{
    //state get all
    [getall_reviews.fulfilled]: (state, action) => {
        state.status = "success";
        state.reviewlist = action.payload.data.allreviews;},
    [getall_reviews.pending]: (state) => {
        state.status = "pending";
      },
    [getall_reviews.rejected]: (state) => {
        state.status = "rejected";
      },

    //state get one
    [getone_review.fulfilled]: (state, action) => {
        state.status = "success";
        state.reviewList = action.payload.data.onereview;},
    [getone_review.pending]: (state) => {
        state.status = "pending";
      },
    [getone_review.rejected]: (state) => {
        state.status = "rejected";
      },
 
// state add
    [addreview.fulfilled]: (state, action) => {
        state.status = "success";
      },
    [addreview.pending]: (state) => {
        state.status = "pending";
      },
    [addreview.rejected]: (state) => {
        state.status = "rejected";
      },

// state delete
      [deletereview.fulfilled]: (state, action) => {
        state.status = "success";
      },
      [deletereview.pending]: (state) => {
        state.status = "pending";
      },
      [deletereview.rejected]: (state) => {
        state.status = "rejected";
      },

//state update
      [editreview.fulfilled]: (state, action) => {
        state.status = "success";
      },
      [editreview.pending]: (state) => {
        state.status = "pending";
      },
      [editreview.rejected]: (state) => {
        state.status = "rejected";
      },

  }
})

export default reviewSlice.reducer