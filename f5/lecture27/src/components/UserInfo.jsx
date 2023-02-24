// props: any - type annotation
import { useState } from "react";
import "./UserInfo.css";

export default function UserInfo(props) {
  let { user } = props;
  const [isDetailed, setDetailed] = useState(false);

  const showDetailedInfo = () =>{
    console.log(user.about)
  }

  return (
    <>
      {user.isActive && (
        <>
          <div className="info">
            <h1>Hello my name is {user.name}</h1>
            <h2>I am {user.age} y.o.</h2>
            <img src={user.avatar} alt="myAvatar" />
            <button onClick={showDetailedInfo} className="btn btn-primary">
              Подробнее
            </button>
            {isDetailed && <p>{user.about}</p>}
          </div>
        </>
      )}
    </>
  );
}
