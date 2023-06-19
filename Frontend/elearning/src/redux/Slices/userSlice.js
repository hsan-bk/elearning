import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";


export const userRegister = createAsyncThunk("user/register", async (user)=>{
  try {
    let response = await axios.post("http://localhost:5000/user/register", user);
    return  await response;
  } catch (error) {
    console.log(error);
  }
});
export const userLogin = createAsyncThunk("user/login", async (user)=>{
  try {
    let response = await axios.post("http://localhost:5000/user/login", user);
    return await response;
  } catch (error) {
    console.log(error);
  }
});

export const userCurrent = createAsyncThunk("user/current", async ()=>{
  try {
    let response = await axios.get("http://localhost:5000/user/current", {headers:{
      Authorization:localStorage.getItem("token"),},
    });
    return await response;
  } catch (error) {
    console.log(error);
  }
});

//get all
export const getall_user= createAsyncThunk("user/get_all", async()=>{
  try {
      let result= axios.get("http://localhost:5000/user/all_info");
      return result;
  } catch (error) {
      console.log(error)
  }
})

//get one
export const getone_user= createAsyncThunk("user/get_one", async(id)=>{
  try {
      let result= axios.get(`http://localhost:5000/user/info/${id}`);
      return result;
  } catch (error) {
      console.log(error)
  }
})

//delete
export const deleteuser = createAsyncThunk("user/delete", async (id) => {
try {
  let result = axios.delete(`http://localhost:5000/user/delete/${id}`);
  return result;
} catch (error) {
  console.log(error);
}
});

//update
export const edituser = createAsyncThunk("user/edit", async ({id, edited}) => {
try {
  let result = axios.put(`http://localhost:5000/user/update/${id}`, edited);
  return result;
} catch (error) {
  console.log(error);
}
});
const initialState = {
user: null,
status: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout:(state,action)=>{
      state.user=null;
      localStorage.removeItem("token");
    }
  },
  extraReducers:{
    [userRegister.pending]:(state)=>{
        state.status="pending";
    },
    [userRegister.fulfilled]:(state,action)=>{
        state.status="successsss";
        state.user= action.payload.data.newUser;
        localStorage.setItem("token",action.payload.data.token)
    },
    [userRegister.rejected]:(state)=>{
        state.status="fail";
    },

  [userLogin.pending]:(state)=>{
      state.status="pending";
  },
  [userLogin.fulfilled]:(state,action)=>{
      state.status="successsss";
      state.user=action.payload?.data.user;
      localStorage.setItem("token",action.payload.data.token)
  },
  [userLogin.rejected]:(state)=>{
      state.status="fail";
  },

  [userCurrent.pending]:(state)=>{
    state.status="pending";
},
[userCurrent.fulfilled]:(state,action)=>{
    state.status="successsss";
    state.user=action.payload?.data.user;
},
[userCurrent.rejected]:(state)=>{
    state.status="fail";
},

[getall_user.pending]:(state)=>{
  state.status="pending";
},
[getall_user.fulfilled]:(state,action)=>{
  state.status="successsss";
  state.userlist= action.payload?.data.allusers;
},
[getall_user.rejected]:(state)=>{
  state.status="fail";
},

[getone_user.pending]:(state)=>{
  state.status="pending";
},
[getone_user.fulfilled]:(state,action)=>{
  state.status="successsss";
  state.userlist= action.payload?.data.oneuser;
},
[getone_user.rejected]:(state)=>{
  state.status="fail";
},

[deleteuser.pending]:(state)=>{
  state.status="pending";
},
[deleteuser.fulfilled]:(state,action)=>{
  state.status="successsss";
},
[deleteuser.rejected]:(state)=>{
  state.status="fail";
},

[edituser.pending]:(state)=>{
  state.status="pending";
},
[edituser.fulfilled]:(state,action)=>{
  state.status="successsss";
},
[edituser.rejected]:(state)=>{
  state.status="fail";
},
  },
  
})

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions

export default userSlice.reducer