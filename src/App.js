 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Blog from './Components/Blog/Blog';
import Register from './Components/Register/Register';
 
import Notfound from './Components/Nofound/Notfound';
import RequreAuth from './RequreAuth/RequreAuth';
import CheckOut from './Components/Checkout/CheckOut';
 

function App() {
  return (
    <div  >
      <Header></Header>
     
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={< About/>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={<RequreAuth>
          <CheckOut></CheckOut>
        </RequreAuth>}></Route>
       <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
       
    </div>
  );
}

export default App;
