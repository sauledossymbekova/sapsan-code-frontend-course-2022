import "./Card.css";

interface Props {
    isCollapsed: boolean;
    onCardClick: ()=>void;
}

export const Card = ({isCollapsed, onCardClick}: Props) => {
    // const [isCollapsed, setCollapsed] = useState(false)
  return (
    <>
      <div className="card">
        <h1>Title</h1>
        <button onClick={onCardClick}>^</button>
        {isCollapsed && <h2>Description</h2>}
      </div>
    </>
  );
};
