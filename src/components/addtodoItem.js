import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addTodoItem, updateTodoItem } from "../redux/todoListReducer";

function AddTodoItem({ editItem, setEditItem }) {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editItem) {
      setItem(editItem.todoItem);
    }
  }, [editItem]);

  const handleAddOrUpdateItem = () => {
    if (editItem) {
      dispatch(updateTodoItem({ id: editItem.id, todoItem: item }));
      setEditItem(null);
    } else {
      dispatch(addTodoItem({ id: Date.now(), todoItem: item }));
    }
    setItem("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handleAddOrUpdateItem}>
        {editItem ? "Update" : "Add"}
      </button>
    </div>
  );
}

export default AddTodoItem;
