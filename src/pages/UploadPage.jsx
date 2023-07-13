import { useState, useEffect } from 'react';
import { List, Dropdown, FileUploadButton } from '../components';
import { Link } from 'react-router-dom';
import { getPokemons } from '../api/httpClient'


export const UploadPage = () => {
  
  
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
      getPokemons()
          .then((pokemons) => setPokemons(pokemons))
          .catch((err) => console.log(err))
  }, [])
  
  return (
    <div className='container'>
      <h2 className='mt-3'>On-board File Upload</h2>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-6'>
            <List pokemons={pokemons} />
          </div>
          <div className='col-4 ps-4'>
            <div className='row'>
              <Dropdown />
            </div>
            <div className='row mt-4'>
              <FileUploadButton />
              <Link className='btn btn-danger btn-block' to={`/page2`}>
                Abort
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
