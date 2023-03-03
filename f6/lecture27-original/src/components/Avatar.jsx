import "./Avatar.css";

export function Avatar({url}){

  
    return (
      <div >
        <img src={url} alt='MyAvatarPhoto'className="avatar"/>
      </div>
    );
  }
