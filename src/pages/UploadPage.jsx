import { useState, useEffect } from 'react';
import { List, Dropdown } from '../components';
import { Link } from 'react-router-dom';
import { getFiles } from '../api/httpClient'


export const UploadPage = () => {


  const [files, setFiles] = useState([]);
  const [sats, setSats] = useState([]);
  const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {
    setSats(process.env.REACT_APP_SAT.split(','));
  }, [])

  const handleDropdownSelect = (selectedValue) => {
    getFiles(selectedValue)
      .then(setFiles)
      .catch((err) => console.log(err))
  };

  const handleListSelect = (selectedFile) => {
    setSelectedFile(selectedFile)
    console.log(selectedFile);
  };

  const handleClickUpload = () => {
    console.log(`POST ${selectedFile}`);
  }

  return (
    <div className='container'>
      <h2 className='mt-3'>On-board File Upload</h2>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-6'>
            <List items={files} onSelectFile={ handleListSelect } />
          </div>
          <div className='col-4 ps-4'>
            <div className='row'>
              <Dropdown items={sats} onSelectSat={ handleDropdownSelect } />
            </div>
            <div className='row mt-4'>
              <button
                onClick={handleClickUpload}
                className='btn btn-primary mb-2'>
                Upload
              </button>
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
