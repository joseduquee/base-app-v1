export const List = ({ items = [], onSelectFile }) => {
    items = ["hola", "que", "tal", "que", "pasa", "hola", "que", "tal", "que", "pasa", "hola", "que", "tal", "que", "pasa"]

    const handleClick = (item) => {
        onSelectFile(item);
    };

    return (
        <>
            {
                items.length === 0 ? (
                    <p>No hay elementos seleccionados</p>
                ) : (
                    <ul className='list-group' style={{ height: '400px', overflowY: 'scroll' }}>
                        {
                            items.map((item, index) => (
                                <li
                                    key={index}
                                    className='list-group-item'
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => handleClick(item)}
                                >
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                )
            }

        </>
    )
}
