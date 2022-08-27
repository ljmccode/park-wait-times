import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import WaitTimeInfo from './pages/WaitTimeInfo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path=':park' element={<WaitTimeInfo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
