import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:'todo',
    initialState:[]
,
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
        },
        deleteTodo:(state,action)=>{
          return state.filter((item,index)=>index!=action.payload)
        },
        // checkTodo:(state,action)=>{
        //     const currentTodo=state.find(item=>item.id==action.payload.id)
        //     currentTodo.todoComplete=!action.payload.todoComplete

        // }
        
    }
})
export default todoSlice.reducer
export const{addTodo,deleteTodo}=todoSlice.actions