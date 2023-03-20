import { useEffect } from "react";
import "./Scroll.css";

export const Scroll = () => {
  
  useEffect(() => {
    const element = document.getElementById("my-id");

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  let url = "https://wallpaperaccess.com/full/36626.jpg";
  return (
    <>
      <img src={url} alt="MyAvatarPhoto" className="avatar" />
      <img src={url} alt="MyAvatarPhoto" className="avatar" />
      <img src={url} alt='MyAvatarPhoto'className="avatar"/>
      <h1 id="my-id">Hello</h1>
      <img src='https://cdn.wallpapersafari.com/51/27/k7gXOb.jpg' alt='MyAvatarPhoto'className="avatar"/>
      <img src={url} alt='MyAvatarPhoto'className="avatar"/>
      <img src={url} alt='MyAvatarPhoto'className="avatar"/>
      <img src={url} alt='MyAvatarPhoto'className="avatar"/>
    </>
  );
};
