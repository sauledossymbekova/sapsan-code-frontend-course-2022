import { Avatar } from "./Avatar";
import { InfoBlock } from "./InfoBlock"

function Profile({ user }) {
  return (
    <>
      <h2>
        {user.firstname} {user.surname}
      </h2>
      <Avatar url={user.avatarUrl}/>
      <h2>{user.age} y.o.</h2>
      <p>{user.profession}</p>
      <InfoBlock user={user}/>
    </>
  );
}

export default Profile;

// camelCase
// firstWord