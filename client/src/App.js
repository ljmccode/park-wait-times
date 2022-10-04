import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
// import WaitTimeInfo from './pages/WaitTimeInfo';
import Error from './pages/Error';
import './App.css';
import WaitByRide from './components/WaitByRide';
import SharedParkLayout from './pages/SharedParkLayout';
import WaitByTime from './components/WaitByTime';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path='magic-kingdom' element={<SharedParkLayout />}>
            <Route index element={<WaitByTime />} />
            <Route path=':ride' element={<WaitByRide />} />
          </Route>
          <Route path='hollywood-studios' element={<SharedParkLayout />}>
            <Route index element={<WaitByTime />} />
            <Route path=':ride' element={<WaitByRide />} />
          </Route>
          <Route path='epcot' element={<SharedParkLayout />}>
            <Route index element={<WaitByTime />} />
            <Route path=':ride' element={<WaitByRide />} />
          </Route>
          <Route path='animal-kingdom' element={<SharedParkLayout />}>
            <Route index element={<WaitByTime />} />
            <Route path=':ride' element={<WaitByRide />} />
          </Route>
          <Route
            path='/'
            element={<Navigate replace to='/magic-kingdom' />}
          ></Route>
        </Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
