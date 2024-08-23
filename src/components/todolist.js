import { useSelector, useDispatch } from "react-redux";
import { deleteTodoItem } from '../redux/todoListReducer';

function TodoList({ setEditItem }) {
  const todoList = useSelector(state => state.todoList);
  const dispatch = useDispatch();

  return (
    <ul>
      {todoList.map((item) => (
        <div key={item.id}>
          <li>{item.todoItem}</li>
          <button onClick={() => dispatch(deleteTodoItem(item.id))}>Delete</button>
          <button onClick={() => setEditItem(item)}>Edit</button>
        </div>
      ))}
    </ul>
  );
}

export default TodoList;
