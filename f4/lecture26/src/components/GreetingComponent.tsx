// type annotation
// name: string
// age: number
// isStudent: boolean

// деструктуризация
// let { name } = props;

import { UserInterface } from "../types/user";

interface GreetingProps {
  user: UserInterface;
}

function GreetingComponent(props: GreetingProps) {
  // let { name } = props;
  // console.log(props);
  let { user } = props;
  return (
    <div>
      <h1>Hello World!</h1>
      {/* <h1>Your name is {name}?</h1> */}
      <h1>{user.name} {user.surname}</h1>
      <h5>Age: {user.age}</h5>
      <h5>About:</h5>
      <p>{user.about}</p>
      <img src={user.avatar} alt='myPhoto'/>
    </div>
  );
}

export default GreetingComponent;
