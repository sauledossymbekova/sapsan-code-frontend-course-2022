import { useState } from "react";
// destructing props: {children, title, initialValue}

const Search = ({children, title, initialValue}: any) => {
  const names = ["Saule", "Tayan", "Botakoz", "Saya", "Yerzhan"];

  const [text, setText] = useState(" ");

  const handleChange = (e: any) => {
    setText(e.target.value)
  }

  return (
    <>
    <>{children}</>
    <h1> Your initial valu: {initialValue}, your title: {title}</h1>
      <input onChange={handleChange} />
      <h2>{text}</h2>
      <ul>
        {names.map((people) => (
          <li>{people}</li>
        ))}
      </ul>
    </>
  );
};

export default Search;
