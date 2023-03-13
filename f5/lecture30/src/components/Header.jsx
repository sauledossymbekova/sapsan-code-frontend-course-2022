export default function Header({onLangChange, ...props}) {

  const handleClick = (event) => {
    onLangChange(event.target.value)
  }

  return (
    <>
      <button value='kk' onClick={handleClick}>KAZ</button>
      <button value='ru' onClick={handleClick}>RU</button>
    </>
  );
};
