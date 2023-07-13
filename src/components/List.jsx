
export const List = ({ pokemons = [] }) => {
    return (
        <>
            <ul className='list-group' style={{ height: '400px', overflowY: 'scroll' }}>
                {
                    pokemons.map((pokemon) => (
                        <li key={pokemon.name} className='list-group-item'>{pokemon.name}</li>
                    ))
                }
            </ul>
        </>
    )
}
