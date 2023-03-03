interface Props {
    lang: string;
}

const Banner = (props: Props) => {
    const {lang} = props
    return (
        <>
        {lang === 'kk' &&
            <h1> қош келдіңіздер!</h1>
        }
        {lang === 'ru' &&
            <h1>Привет, это мой вебсайт!</h1>
        }
        {lang === 'en' &&
            <h1>Welcome to my website</h1>
        }
        <img alt='BannerImage' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
        </>
        )
}

export default Banner;