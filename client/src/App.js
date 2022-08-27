import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import WaitByTime from './pages/WaitByTime';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path=':park' element={<WaitByTime />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
