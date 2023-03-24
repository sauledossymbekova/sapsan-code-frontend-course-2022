import { useContext } from "react";
import { LanguageContext } from "../App";

export const Banner = () => {
  const language = useContext(LanguageContext);
  console.log(language)

  return (
    <div className="banner">
      {language === 'ru' && <h1>Привет</h1>}
      {language === 'en' && <h1>Hello</h1>}
      {language === 'kk' && <h1>Салем</h1>}
      <img src={theme.image}/>
    </div>
  );
};
