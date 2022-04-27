import './App.sass'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:user' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
