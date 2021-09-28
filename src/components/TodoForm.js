import React from "react";
import { TodoContext } from "../hooks/todoContext";
import '../css/TodoForm.css'

function TodoForm () {
  const [newText, setNewText] = React.useState('')
  const {setOpenModal, addTodo} = React.useContext(TodoContext)

  const handleCancel = () => {
    setOpenModal(false)
  }

  const handleOnChange = (event) => {
    setNewText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!newText) {
      alert('Ingresa una tarea')
    } else {
      addTodo(newText)
      setOpenModal(false)
    }
  }
  return (
    <form onSubmit={handleSubmit} >
      <label>Ingresa una actividad</label>
      <textarea placeholder = " Ingresa una actividad" value={newText} onChange={handleOnChange}/>
      <div className="TodoForm-buttonContainer">
        <button 
          className="TodoForm-button TodoForm-button-cancel"
          onClick = {handleCancel}
        >
          Cancelar
        </button>
        <button
          className="TodoForm-button TodoForm-button-add"
          type = "submit"
        >
          Ingresar
        </button>
      </div>
    </form>
  )
}

export {TodoForm}