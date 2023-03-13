import "./InfoBlock.css";

export function InfoBlock(props){
    return (
      <div className="info">
        <p>{props.user.about}</p>
      </div>
    );
  }