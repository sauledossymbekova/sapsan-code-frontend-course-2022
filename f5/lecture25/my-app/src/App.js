import './App.css';
import { AvatarComponent } from './components/AvatarComponent';
import { GreetingComponent } from './components/GreetingComponent';
// import { MainBlock } from './components/MainBlock';

function App() {
  let myUrl = 'https://avatars.githubusercontent.com/u/44088023?v=4';

  return (
    <div className="App">
      {/* <MainBlock/> */}
      {/* <AvatarComponent url={myUrl}/> */}

      <GreetingComponent name='Saule'/>
      <GreetingComponent name='Assel'/>
      <GreetingComponent name='Madina'/>
      <GreetingComponent name='Kanat'/>
      <GreetingComponent name='Aibolat'/>
      <GreetingComponent name='Daniyar'/>
    </div>
  );
}

export default App;
