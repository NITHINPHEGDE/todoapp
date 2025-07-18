import Todoitem from './Todoitem';
import styles from "./TodoItems.module.css"
const TodoItems = ({ todoItems, onDelete }) => {
  return (
    <div className={styles.itemscontainer}>
      {todoItems.map((items) => (<Todoitem todoDate={items.dueDate} todoName={items.name} onDelete={onDelete}></Todoitem>))}

    </div>

  );
};
export default TodoItems; 