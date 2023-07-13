import { createNumberArray } from '../api/seedData';
import { Link } from 'react-router-dom';


export const DownloadPage = () => {
  const numbers = createNumberArray();

  return (
    <>
      <div className='container'>
        <h2 className='mt-3'>On-board File Download</h2>
        <div className='container mt-4'>
          <div className='row'>
            <div className='col-6'>
              <div className='row'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '10px' }}>Type:</span>
                  <select className="form-select" aria-label="Default select example">
                    <option defaultValue></option>
                    {
                      numbers.map((number) => (
                        <option key={number} value={number}>{number}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className='row'>
                <div className='mt-2' style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '10px' }}>Index:</span>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-5 ps-4'>
              <div className='row'>
                <Link className='btn btn-primary' to={`/`}>
                  Download
                </Link>
                <Link className='btn btn-secondary mt-2' to={`/`}>
                  Abort
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
