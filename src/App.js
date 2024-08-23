import logo from './logo.svg';
import './App.css';
import AddTodoItem from './components/addtodoItem';
import TodoList from './components/todolist';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  const [editItem, setEditItem] = useState(null);

  return (
    <div className="App">
      <AddTodoItem editItem={editItem} setEditItem={setEditItem} />
      <TodoList todo={todo} setEditItem={setEditItem} />
    </div>
  );
}

export default App;
