
export const List = ({ items = [] }) => {
    return (
        <>
            <ul className='list-group' style={{ height: '400px', overflowY: 'scroll' }}>
                {
                    items.map((item, index) => (
                        <li key={index} className='list-group-item'>{item}</li>
                    ))
                }
            </ul>
        </>
    )
}
