
export const Dropdown = ({ items = [] }) => {
    return (
        <select className='form-select' aria-label='Default select example'>
            <option defaultValue></option>
            {
                items.map((item, index) => (
                    <option key={index} value={item}>{item}</option>

                ))
            }
        </select>
    )
}

