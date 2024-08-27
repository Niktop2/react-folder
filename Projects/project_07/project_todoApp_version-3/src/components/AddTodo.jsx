import { useState, useRef } from "react";

function AddTodo({ onNewItems }) {
 
  const todoNameElement = useRef();
  const todoDateElement = useRef();


 

  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = todoDateElement.current.value;
    console.log(`${todoName} due on: ${dueDate}`);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            
            
          />
        </div>
        <div className="col-4">
          <input 
          type="date"
          ref={todoDateElement}
         
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn kg-button btn-success"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
