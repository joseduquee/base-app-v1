import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';

export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
            <div className='navbar-collapse'>
                <div className='navbar-nav'>

                    <div className='container'>
                        <div className='collapse navbar-collapse' id='navbarNav'>
                            <ul className='navbar-nav'>
                                <li className='nav-item dropdown'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='secondary' id='dropdown-menu'>
                                            SVC 13
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item as={Link} to='/upload'>
                                                Upload
                                            </Dropdown.Item>
                                            <Dropdown.Item as={Link} to='/download'>
                                                Download
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}