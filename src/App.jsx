import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './Redux/todoSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [todoInput, setTodoInput] = useState("")
  const dispatch = useDispatch()
  const { todos } = useSelector(state => state.todoReducer)

  const handleAdd = () => {
    if (todoInput == "") {
      toast.warning('Please add your todo..')
    } else {
      const newTodo = {
        todoTitle: todoInput
      }
      dispatch(addTodo(newTodo))
      toast.success(`${newTodo.todoTitle} added successfully`)
      setTodoInput("")
    }

  }

  const handleDelete=(todoTitle)=>{
    // console.log("delete");
    dispatch(deleteTodo(todoTitle))
    toast.warning(`${todoTitle} deleted`)

  }

  // console.log(todoInput);
  // console.log(todos);


  return (
    <>
      <div style={{ minHeight: '100vh' }} className='d-flex justify-content-center align-items-center w-100'>
        <div style={{ width: '800px', minHeight: '500px' }} className='card shadow'>

          <div className='d-flex justify-content-center mt-5'>
            <h3 className='text-info fw-bolder '>TODO LIST</h3>
          </div>

          <div className='mt-5 d-flex justify-content-center '>
            <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} type="text" className='form-control w-50 rounded' placeholder='Add todos..' />
            <button onClick={handleAdd} className='btn btn-success ms-3 rounded'>Add</button>
          </div>


          {
          todos?.length > 0? todos?.map((item,index) => (
            <div key={index} className='d-flex justify-content-around mt-5' >
              <input type="checkbox" />
              <h3>{item.todoTitle}</h3>
              <button onClick={()=>handleDelete(item.todoTitle)} className='btn '><i className="fa-solid fa-trash text-danger"></i></button>
            </div>
          )):
          <div  className='fw-bolder text-danger text-center mt-5'>Nothing to display</div>
            }

        </div>

      </div>

      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>


    </>
  )
}

export default App
