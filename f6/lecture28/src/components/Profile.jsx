import "./Profile.css";
import { Avatar } from "./Avatar";
import { InfoBlock } from "./InfoBlock";

function Profile({ user }) {
  let a = 0

  const handleClick = () => {
    console.log("clicked");
    
  };

  return (
    <>
      {user.isActive && (
        <>
          <div className="container">
            <Avatar url={user.avatarUrl} />
            <div className="main-info">
              <h2>
                {user.firstname} {user.surname}
              </h2>
              <h2>{user.age} y.o.</h2>
              <p>{user.profession}</p>
            </div>
          </div>
          <button onClick={handleClick}>Click Me</button>
          <InfoBlock user={user} />
        </>
      )}

      {/* {user.isActive === true && user.age > 18 && <h1>User {user.firstname} is acttive</h1>} */}
      {/* Conditional rendering + logical operator AND */}

      {/* {user.isActive === true && user.age > 18 ? (
        <h1 style={{ color: "green" }}>User {user.firstname} is active</h1>
      ) : (
        <h1 style={{ color: "red" }}>User {user.firstname} is NOT ACTIVE or 18y.o</h1>
      )} */}
      {/* Conditional rendering + Ternary Operator */}
    </>
  );
}

export default Profile;

// camelCase
// firstWord
