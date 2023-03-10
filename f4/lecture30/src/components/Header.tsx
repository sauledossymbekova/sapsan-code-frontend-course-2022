interface Props {
  onLangChange: (lang: string) => void;
}

const Header = ({ onLangChange }: Props) => {
  const handleButtonClick = (e: any) => {
    console.log(e);
    onLangChange(e.target.value) //'kk'
  };

  return (
    <>
      <button value={'kk'} onClick={handleButtonClick}>KZ</button>
      <button value={'ru'} onClick={handleButtonClick}>RU</button>
      <button value={'en'} onClick={handleButtonClick}>EN</button>
    </>
  );
};

export default Header;
