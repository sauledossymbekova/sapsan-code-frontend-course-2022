import { useState } from "react";

const initialToDoList = [
  { id: 1, title: "do homework", isCompleted: false }, // 0
  { id: 2, title: "do cleaning" }, // 1
  { id: 3, title: "chill" }, // 2
];

const ToDoList = () => {
  //   const [list, setList] = useState(["do homework", "do cleaning", "chill"]);
  const [list, setList] = useState(initialToDoList);

  const [newTodoTitle, setNewToDoTitle] = useState("");

  const addNewTodo = () => {
    // setList([...list, newTodoTitle]);
    let newTodo = { id: list.length + 1, title: newTodoTitle };
    setList([...list, newTodo]);
    setNewToDoTitle("");
  };

  const deleteToDo = (id) => {
    // 1 2 3 => deleteTodo 1 => 2 3
    // filter
    console.log(id);
  };

  return (
    <>
      <h1>ToDo List Page</h1>
      <input
        value={newTodoTitle}
        onChange={(e) => setNewToDoTitle(e.target.value)}
      />
      <button onClick={addNewTodo}> ADD</button>
      {/* <ul>
        {list.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul> */}
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.id} {todo.title}
            <button key={todo.id} onClick={() => deleteToDo(todo.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
