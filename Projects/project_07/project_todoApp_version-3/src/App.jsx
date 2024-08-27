import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import WelcomeMessage from "./components/WelcomeMessage";

import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import TodoItems from "./components/TodoItems";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let items = [];
  // let items = ["bhaji", "pooli", "waran", "bhaat", "toop"];

  //   let textStateArr = useState("Food Item Entered by user");
  //   let textToShow = textStateArr[0];
  //   let setTextState = textStateArr[1];
  // console.log(`Current value of textState:${textToShow}`)

  // let [textToShow, setTextState] = useState();
  let [items, setItems] = useState([]);
  // let [items, setItems] = useState(["bhaji", "pooli", "waran"]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...items, newFoodItem];
      setItems(newItems);
    }
  };
  // ======================================================

  //  ========================================================
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added: ${itemName} date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodotems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodotems);
  }

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItems={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
      </center>
      <br />
      ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      <Container>
        <Container>
          <h1 className="text-center">Healthy Food</h1>
        </Container>
        <FoodInput handleKeyDown={onKeyDown} />
        <FoodItems foodItems={items} />
        <ErrorMessage foodItems={items} />
      </Container>
    </>
  );
}

export default App;
