// props: any - type annotation
import './UserInfo.css'

export default function UserInfo(props: any) {
  let { user } = props;

  return (
    // <React.Fragment>    </React.Fragment>
    <>
    <div className='info'>
      <h1>Hello my name is {user.name}</h1>
      <h2>I am {user.age} y.o.</h2>
      <p>{user.about}</p>
    </div>
      <img src={user.avatar} alt="myAvatar" />
    </>
  );
}
