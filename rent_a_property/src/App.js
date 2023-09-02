import './App.css';
import {Route, Routes} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './links/Home';

function App() {
  return (
  <>
    <NavBar/>
    <div className='components'>
      <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/Rent' element={<Rent/>}/>
          <Route path='/Buy' element={<Buy/>}/>
          <Route path='/Sell' element={<Sell/>}/>
          <Route path='/ManageProperty' element={<ManageProperty/>}/>
          <Route path='/Resources' element={<Resources/>}/> */}
      </Routes>
    </div>
  </>
  );
}

export default App;
