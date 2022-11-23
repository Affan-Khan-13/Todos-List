import React from 'react'
import Todoitem from '../MyComponents/Todoitem';

const Todos = (props) => {
  let myStyles = {
    minheight:"70vh",
    margin: "40px auto"
  }
  return (
    <div className='container my-3' style={myStyles}>
      <h3 className=' my-3'>Todos list</h3>
      {props.todos.length===0? "No Todos To Display" :
       props.todos.map((todo )=> {
        return (<Todoitem todo={todo} key = {todo.sno} onDelete={props.onDelete}/>)
      })
    }

    </div>
  )
}

export default Todos
