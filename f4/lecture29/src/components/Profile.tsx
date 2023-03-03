import "./App.css";


function Profile(props: any) {

  return (
    <>
      <div className="App">
        <h1>My name is: {props.firstname}</h1>
        <h1>My surname is: {props.surname}</h1>
      </div>
    </>
  );
}

export default Profile;

// {/* <button onClick={makeDark}>Mode</button> */}
