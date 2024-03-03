import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Room from './pages/Room/Room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/room/:roomId' element={<Room/>} />
      </Routes>
    </div>
  );
}

export default App;
