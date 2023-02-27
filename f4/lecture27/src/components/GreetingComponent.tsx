// type annotation
// name: string
// age: number
// isStudent: boolean

// деструктуризация
// let { name } = props;
import { useState } from "react";
import { UserInterface } from "../types/user";

interface GreetingProps {
  user: UserInterface;
}

function GreetingComponent(props: GreetingProps) {
  let { user } = props;

  const [isDetailed, setDetailed] = useState(false);

  const showDetails = () => {
    setDetailed(!isDetailed);
  };

  // const [count, setCount] = useState(0);
  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      {user.isActive && user.age > 20 ? (
        <>
          <button>+</button>
          <h1>Count: 0</h1>
          <button>-</button>

          <h1>
            {user.name} {user.surname}
          </h1>

          <button onClick={showDetails}>
            {isDetailed ? "Скрой данные" : "Покажи данные:"}
          </button>
          {isDetailed && (
            <>
              <h5>Age: {user.age}</h5>
              <h5>About:</h5>
              <p>{user.about}</p>
              <img src={user.avatar} alt="myPhoto" />
            </>
          )}
          {/* <button onClick={handleClick}>Click me</button>
          <h1 style={{ color: "red" }}> You clicked me {count}</h1> */}
        </>
      ) : (
        <h1> {user.name} IS NOT ACTIVE OR 20y.o</h1>
      )}
    </div>
  );
}

export default GreetingComponent;

// {/* {user.isActive && user.age > 20 &&
//   <>
//     <h1>
//       {user.name} {user.surname}
//     </h1>
//     <h5>Age: {user.age}</h5>
//     <h5>About:</h5>
//     <p>{user.about}</p>
//     <img src={user.avatar} alt="myPhoto" />
//   </>
// } */}
