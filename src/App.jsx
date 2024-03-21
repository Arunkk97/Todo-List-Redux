import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './Redux/todoSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [todoInput, setTodoInput] = useState("")
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todoReducer)
  const [todoCount, setTodoCount] = useState(0)

  const handleAdd = () => {
    if (todoInput == "") {
      toast.warning('Please add your todo..')
    } else {
      dispatch(addTodo({ todoTitle: todoInput }))
      toast.success(`${todoInput} added successfully`)
      setTodoInput("")
    }

  }

  const handleDelete = (index) => {
    // console.log("delete");
    dispatch(deleteTodo(index))
    toast.warning(`${todos[0].todoTitle} deleted`)

  }

  const handleCheck=(e)=>{
    if(e.target.checked){
      setTodoCount(todoCount+1)
    }else{
      setTodoCount(todoCount-1)
    }
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
            todos?.length > 0 ? todos?.map((item, index) => (
              <div key={index} className='d-flex justify-content-around mt-5' >
                <input onChange={(e)=>handleCheck(e)} type="checkbox" />
                <h3>{item.todoTitle}</h3>
                <button onClick={() => handleDelete(index)} className='btn '><i className="fa-solid fa-trash text-danger"></i></button>
              </div>
            )) :
              <div className='fw-bolder text-danger text-center mt-5'></div>
          }

          <p className='fw-bolder ms-4 mt-5'>Total completed Todo's: {todoCount}</p>

        </div>


      </div>

      <ToastContainer position='top-center' theme='colored' autoClose={3000} />


    </>
  )
}

export default App
