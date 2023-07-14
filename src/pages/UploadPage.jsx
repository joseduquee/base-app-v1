import { useState, useEffect } from 'react';
import { List, Dropdown } from '../components';
import { Link } from 'react-router-dom';
import { getFiles, putFile } from '../api/httpClient';
import Swal from 'sweetalert2';

export const UploadPage = () => {

  const [files, setFiles] = useState([]);
  const [sats, setSats] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [selectedSat, setSelectedSat] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    setSats(process.env.REACT_APP_SAT.split(','));
  }, []);

  const handleDropdownSelect = (selectedValue) => {
    setError(null);
    setSelectedSat(selectedValue);
    getFiles(selectedValue)
      .then(setFiles)
      .catch((err) => setError(err.response.data))
  };

  const handleListSelect = (selectedFile) => {
    setSelectedFile(selectedFile)
  };

  const handleClickUpload = async () => {
    const data = {
      "domain": selectedSat,
      "name": selectedFile
    }
    await putFile(data)
      .then(console.log)
      .catch((err) => Swal.fire('Error', err.response.data, 'error'))
  }

  return (
    <div className='container'>
      <h2 className='mt-3'>On-board File Upload</h2>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-6'>
            <List items={files} onSelectFile={handleListSelect} error={ error }/>
          </div>
          <div className='col-4 ps-4'>
            <div className='row'>
              <Dropdown items={sats} onSelectSat={handleDropdownSelect} />
            </div>
            <div className='row mt-4'>
              <button
                onClick={handleClickUpload}
                className='btn btn-primary mb-2'
                disabled={ !selectedFile || !selectedSat }
              >
                Upload
              </button>
              <Link className='btn btn-danger btn-block' to={`/`}>
                Abort
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
