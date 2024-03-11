
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Navbarpage from './Component/Navbarpage';
import Singlerecipe from './Pages/Singlerecipe';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbarpage/>
      <Routes>
        <Route path='/'element={<Homepage/>}/>
        <Route path='/Singlerecipe'element={<Singlerecipe/>} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
