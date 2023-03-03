export const ModeButton = (props: any) => {
  return (
    <>
      <button onClick={props.onModeClick}>Mode</button>
      <input type="text" onChange={props.onModeChange} />
    </>
  );
};

// lang = 'ru'

// App
// LangSetting => button to changeLang => lang ='kk'
// Banner => title(Добро пожаловать/ Кош келдиниз)
