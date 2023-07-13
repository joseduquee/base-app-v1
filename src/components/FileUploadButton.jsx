import { useRef } from 'react';

export const FileUploadButton = () => {
  
  const hiddenFileInput = useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

  return (
    <>
      <button 
        onClick={ handleClick } 
        className='btn btn-primary mb-2'>
          Upload
      </button>
      <input 
        type='file' 
        style={{ display: 'none' }} 
        ref={hiddenFileInput} 
        onChange={ handleFileUpload }
      />
    </>
  );
};