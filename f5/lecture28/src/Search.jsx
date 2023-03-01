const Search = () => {
    const names = ['Saule', 'Assel', 'Madina', 'Assanali', 'Kanat', 'Talim'];

    return(
        <>
        <input/>
        <h1>List of names:</h1>
        <ul>
            {names.map((person) => <li>{person}</li>)}
        </ul>
        </>
    )
}

export default Search