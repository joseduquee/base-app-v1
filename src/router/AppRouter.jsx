import { Navigate, Route, Routes } from 'react-router-dom';
import { DownloadPage, HomePage, UploadPage } from '../pages';
import { Navbar } from '../components/Navbar';


export const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={ <HomePage /> }/>
            <Route path='/download' element={ <DownloadPage /> }/>
            <Route path='/upload' element={ <UploadPage /> }/>
            <Route path='/*' element={ <Navigate to='/' /> }/>
        </Routes>
    </>
  )
}
