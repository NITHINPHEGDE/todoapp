
import Appname from './components/Appname';
import Apptodo from './components/Apptodo';
import Todoitem from './components/Todoitem';
import Todoitems from './components/TodoItems';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import { useState } from "react";
import Footer from './Footer';
function App() {

  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newTodoItems);
  };
  const handleDelete = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return <center className='todo-container'>

    <Appname>
    </Appname>
    <Apptodo onNewItem={handleNewItem}></Apptodo>
    {todoItems.length === 0 && <WelcomeMessage todoItems={todoItems}></WelcomeMessage>}
    <Todoitems todoItems={todoItems} onDelete={handleDelete}></Todoitems>

    <Footer></Footer>

  </center>
}
export default App;