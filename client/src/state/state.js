import {createSlice} from '@reduxjs/toolkit'

const initialState={
    user:null,
    token:null,
    posts:[]
}

export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setLogin: (state,action)=>{
            state.user=action.payload.user;
            state.token=action.payload.token;
        },
        setLogout:(state,action)=>{
            state.user=null;
            state.token=null;
        },
        setPosts:(state,action)=>{
            state.posts=action.payload.posts
        },
        setPost:(state,action)=>{
            state.posts=state.posts.map(item=>(item._id===action.payload._id)?action.payload:item);
        }
    }
});

export const {setLogin,setLogout,setPosts,setPost}=authSlice.actions
export default authSlice.reducer