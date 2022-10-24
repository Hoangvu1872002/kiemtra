import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import React , {useState, useEffect} from 'react'

const TodoList = () => {

  const [dataCheckbox , setDataCheckbox]= useState()
  const [ttEdit,setTtEdit] = useState({
    content:'',
    dataCheckbox:''
})
const [indexEdit, setIndexEdit] = useState('')

  const todoList = JSON.parse(localStorage.getItem('todoList')) || []

  const tick = (index) => {
    const dataClick = todoList.find((e, vt) => vt === index)
    
    setTtEdit({
      content: dataClick.content,
      dataCheckbox: dataClick.dataCheckbox,
    })
    setIndexEdit(index)
  
    console.log(ttEdit.content)
    if(ttEdit.dataCheckbox===0){
      setTtEdit({
        content:ttEdit.content,
        dataCheckbox:1
      })
    }else{
      setTtEdit({
        content:ttEdit.content,
        dataCheckbox:0
      })
    }
    todoList[indexEdit].dataCheckbox = ttEdit.dataCheckbox 
    localStorage.setItem('todoList', JSON.stringify(todoList))
 
}
console.log(ttEdit.dataCheckbox)
const todoListColor = JSON.parse(localStorage.getItem('todoList')) || []


  return (
    <div className="todo-list-container">
       {todoList.map((e,index)=>{
        return(
          <div className="todo-item-container" key={index}>
          <FaRegCircle className="item-done-button" onClick={()=>tick(index)} style={{ color: todoListColor[index].dataCheckbox !== 0 ? 'red' : '#3CB371' }} />
          <div className="item-title">{e.content}</div>
          </div>
        )
    })
}
    </div>
  );
};

export default TodoList;