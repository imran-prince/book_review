 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Blog from './Components/Blog/Blog';
 
 
import Notfound from './Components/Nofound/Notfound';
import RequreAuth from './RequreAuth/RequreAuth';
import CheckOut from './Components/Checkout/CheckOut';
import { createContext } from 'react';
import useDataLoad from './hooks/useDataLoad';
import Booking from './Components/Booking/Booking';
import NewRegister from './Components/NewRegister/NewRegister';
import Footer from './Components/Footer/Footer';
 
 
 
export const LoadContext = createContext()
function App() {
  const [services,setServices]=useDataLoad()
  return (
    <LoadContext.Provider value={[services,setServices]}>


    <div  >
      <Header></Header>
     
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/booking' element={<Booking></Booking>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={< About/>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/newregister' element={<NewRegister></NewRegister>}></Route>
        <Route path='/checkout/:id' element={<RequreAuth>
          <CheckOut></CheckOut>
        </RequreAuth>}></Route>
 
       <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
       
      <Footer></Footer>
    </div>
     
    </LoadContext.Provider>
  );
}

export default App;
