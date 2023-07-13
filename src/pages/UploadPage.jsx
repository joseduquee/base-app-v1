import { useState, useEffect } from 'react';
import { List, Dropdown, FileUploadButton } from '../components';
import { Link } from 'react-router-dom';
import { getFiles } from '../api/httpClient'


export const UploadPage = () => {
  
  
  const [files, setFiles] = useState([]);
  const [sats, setSats] = useState([]);
  

  useEffect(() => {
      getFiles()
          .then(setFiles)
         .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    setSats(process.env.REACT_APP_SAT.split(','));
  }, [])
  
  return (
    <div className='container'>
      <h2 className='mt-3'>On-board File Upload</h2>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-6'>
            <List items={files} />
          </div>
          <div className='col-4 ps-4'>
            <div className='row'>
              <Dropdown items={ sats }/>
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
