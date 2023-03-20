import { useContext } from "react";
import { LangContext } from "../context";
import "./Banner.css";
export const Banner = () => {
  const language = useContext(LangContext);

  return (
    <div className="banner-container">
      {language}
      <h1>Banner</h1>
      {language === "kk" ? (
        <img
          src="https://akorda.kz/assets/media/flag_mediumThumb.jpg"
          alt="Kzflag"
        />
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"
          alt="Ruflag"
        />
      )}
    </div>
  );
};
