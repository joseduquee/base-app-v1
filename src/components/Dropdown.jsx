
export const Dropdown = ({ items = [], onSelectSat  }) => {
    
    const handleSelect = (event) => {
        const selectedValue = event.target.value;
        onSelectSat(selectedValue);
    };
    
    return (
        <select className='form-select' onChange={handleSelect}>
            <option defaultValue></option>
            {
                items.map((item, index) => (
                    <option key={index} value={item}>{item}</option>

                ))
            }
        </select>
    )
}

