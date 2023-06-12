import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

//get all
export const getall_tags= createAsyncThunk("tags/get_all", async()=>{
    try {
        let result= axios.get("http://localhost:5000/tag/all_tags");
        return result;
    } catch (error) {
        console.log(error)
    }
})

//get one
export const getone_tag= createAsyncThunk("tag/get_one", async(id)=>{
    try {
        let result= axios.get(`http://localhost:5000/tag/one_tag/${id}`);
        return result;
    } catch (error) {
        console.log(error)
    }
})

//add
export const addtag = createAsyncThunk("tag/add", async (tag) => {
  try {
    let result = axios.post("http://localhost:5000/tag/new_tag", tag);
    return result;
  } catch (error) {
    console.log(error);
  }
});

//delete
export const deletetag = createAsyncThunk("tag/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/tag/delete/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

//update
export const edittag = createAsyncThunk("tag/edit", async ({id, edited}) => {
  try {
    let result = axios.put(`http://localhost:5000/tag/update/${id}`, edited);
    return result;
  } catch (error) {
    console.log(error);
  }
});


const initialState = {
  taglist: null,
  status: null,
}

export const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
  },
  extraReducers:{
    //state get all
    [getall_tags.fulfilled]: (state, action) => {
        state.status = "success";
        state.taglist = action.payload.data.alltags;},
    [getall_tags.pending]: (state) => {
        state.status = "pending";
      },
    [getall_tags.rejected]: (state) => {
        state.status = "rejected";
      },

    //state get one
    [getone_tag.fulfilled]: (state, action) => {
        state.status = "success";
        state.userList = action.payload.data.onetag;},
    [getone_tag.pending]: (state) => {
        state.status = "pending";
      },
    [getone_tag.rejected]: (state) => {
        state.status = "rejected";
      },
 
// state add
    [addtag.fulfilled]: (state, action) => {
        state.status = "success";
      },
    [addtag.pending]: (state) => {
        state.status = "pending";
      },
    [addtag.rejected]: (state) => {
        state.status = "rejected";
      },

// state delete
      [deletetag.fulfilled]: (state, action) => {
        state.status = "success";
      },
      [deletetag.pending]: (state) => {
        state.status = "pending";
      },
      [deletetag.rejected]: (state) => {
        state.status = "rejected";
      },

//state update
      [edittag.fulfilled]: (state, action) => {
        state.status = "success";
      },
      [edittag.pending]: (state) => {
        state.status = "pending";
      },
      [edittag.rejected]: (state) => {
        state.status = "rejected";
      },

  }
})

export default tagSlice.reducer