type Props = {
  changeLang: () => void;
};

export const Header = ({ changeLang }: Props) => {
  return (
    <div className="container">
      <h1>Header</h1>
      <button onClick={changeLang}> RU </button>
    </div>
  );
};
