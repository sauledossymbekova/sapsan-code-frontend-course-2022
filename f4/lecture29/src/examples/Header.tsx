interface Props {
    onLangChange: (lang: string) => void
}

const Header = ({onLangChange}: Props) => {


    const handleButtonClick = (e: any) => {
        console.log(e);
        // onLangChange(e.)
    }

    return (
        <>
        <button onClick={()=> onLangChange('kk')}>KZ</button>
        <button onClick={handleButtonClick}>RU</button>
        <button onClick={handleButtonClick}>EN</button>
        </>
        )
}

export default Header;