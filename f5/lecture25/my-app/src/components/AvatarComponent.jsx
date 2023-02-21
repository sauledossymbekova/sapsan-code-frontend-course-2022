export function AvatarComponent(props) {
  console.log(props);

  return (
    <div>
      <h1>My AvatarComponent {props.url}</h1>
      <img src={props.url} alt="" />
    </div>
  );
}