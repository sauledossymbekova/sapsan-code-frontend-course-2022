import "./App.css";

import Profile from "./components/Profile";
import { Avatar } from "./components/Avatar";

function App() {
  const currentUser = {
    firstname: "Saule",
    surname: "Doss",
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    age: 22,
    profession: "SWE",
    city: "Almaty",
    avatarUrl: 'https://avatars.githubusercontent.com/u/44088023?v=4',
    isActive: true,
  };

  let image = 'https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/19/US0044-NPUB31700_00-UACAPABILT000003/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000'

  return (
    <div className="App">
      {/* <h1>Hello world!</h1> */}
      <Avatar url={image}/>

      <Profile user={currentUser} />
    </div>
  );
}

export default App;
