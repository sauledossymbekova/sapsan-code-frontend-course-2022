import './GreetingComponent.css'

export function GreetingComponent(props) {
  return (
    <div>
      <h1> Hello {props.name}!</h1>
    </div>
  );
}
