import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import WaitTimeInfo from './pages/WaitTimeInfo';
import Error from './pages/Error';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Error />}></Route>
        <Route path='/' element={<SharedLayout />}>
          <Route path='magic-kingdom' index element={<WaitTimeInfo />}></Route>
          <Route path='hollywood-studios' element={<WaitTimeInfo />}></Route>
          <Route path='epcot' element={<WaitTimeInfo />}></Route>
          <Route path='animal-kingdom' element={<WaitTimeInfo />}></Route>
          <Route
            path='/'
            element={<Navigate replace to='/magic-kingdom' />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
