import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:'todo',
    initialState:{
        todos:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        deleteTodo:(state,action)=>{
           const newTodos= state.todos.filter(item=>item?.todoTitle!=action.payload)
           state.todos=[...newTodos]
        },
        checkTodo:(state,action)=>{
            
        }
        
    }
})
export default todoSlice.reducer
export const{addTodo,deleteTodo}=todoSlice.actions