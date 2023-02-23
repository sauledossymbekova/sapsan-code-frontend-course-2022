import "./App.css";
import GreetingComponent from "./components/GreetingComponent";
import { user, users } from "./data/mock";

function App() {
  // let name = 'Saule'
  // let surname = 'Doss'
  return (
    <div className="App">
      {/* <GreetingComponent name={name} surname={surname}/> */}
      <GreetingComponent user={user} />
      {users.map((item) => {
        return <GreetingComponent user={item} />;
      })}
    </div>
  );
}

export default App;
