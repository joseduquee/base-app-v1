import { useState, useEffect } from 'react';

export const Dropdown = ({ items = [], onSelectSat }) => {

    const [ selectedSat, setSelectedSat ] = useState('');

    useEffect(() => {
        if(items.length > 0){
            setSelectedSat(items[0]);
            onSelectSat(items[0]);
        }
    // eslint-disable-next-line
    }, [items]);

    const handleSelect = (event) => {
        const selectedValue = event.target.value;
        setSelectedSat(selectedValue);
        onSelectSat(selectedValue);
    };

    return (
        <select className='form-select' onChange={handleSelect} value={ selectedSat }>
            {items.map((item, index) => (
                <option key={index} value={item}>{item}</option>
            ))}
        </select>
    );
    
}

