import "./App.css";
import Counter from "./Counter";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <Search title='My Search Component' initialValue='Hello' >
        <div>
          <h1>Some children</h1>
          <img src='' alt='Myphoto'/>
        </div>
      </Search>

      {/* <Counter></Counter> 
     <Counter></Counter> 
     <Counter></Counter>  */}
    </div>
  );
}

export default App;
