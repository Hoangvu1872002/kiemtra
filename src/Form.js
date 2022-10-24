import React , {useState} from 'react'


const Form = () => {
  const [content, setContent] = useState('')
  const [dataCheckbox , setDataCheckbox]= useState(0)

  const getContent = (event) => {
    setContent(event.target.value)
}

const saveDatalocal = (e) => {

  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

  const dataFind = todoList.find(e => e.content === content);

  if(dataFind){
    alert('nhiem vu da ton tai')
  }else{
    const dataContent = {
     content,
     dataCheckbox
  }

  todoList.push(dataContent)
  localStorage.setItem('todoList', JSON.stringify(todoList));
  }
}
    return (
      <form className="form">
        <input type="text" id="text" name="fname" placeholder="Enter task ..." value={content} onChange={getContent} />
        <button type="submit" className="btn-submit" onClick={saveDatalocal} >Submit</button>
      </form>
    );
  };
  
  export default Form;
  