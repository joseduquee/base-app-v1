import { useState } from 'react';

export const List = ({ items = [], onSelectFile, error }) => {

    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = (item) => {
        setSelectedItem(item);
        onSelectFile(item);
    };

    return (
        <>
            {
                error ? (
                    <p>{error}</p>
                ) : items.length === 0 ? (
                    <p>There are no files in SAT</p>
                ) : (
                    <ul className='list-group' style={{ height: '400px', overflowY: 'scroll' }}>
                        {
                            items.map((item, index) => (
                                <li
                                    key={index}
                                    className={`list-group-item ${selectedItem === item ? 'active' : ''}`}
                                    style={{
                                        cursor: 'pointer',
                                        border: selectedItem === item ? 'none' : ''
                                    }}
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
