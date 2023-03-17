import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
  // Spread
  // const letters = ["a", "b", "c"];
  // const numbers = ["1", "2", "3"];
  // // result = Saule, a, b, c, Madina, 1, 2, 3, Assel
  // const result = ["Saule", ...letters, "Madina", ...numbers, "Assel"];

  const numbers = [1, 5, 10, 20, 4, 40, 23];

  const result = numbers.filter((a) => a > 10);
  console.log(result); // 20, 40, 23

  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
