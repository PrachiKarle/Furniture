import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import About from './About';
import Service from './Service';
import Blog from './Blog';
import Contact from './Contact';
import Sign from './Sign';
import SignUp from './SignUp';

function App() {
  return (
    <>
      <Router>
         <Routes>
          <Route  path='/' element={<Header/>}>
             <Route index element={<Home/>}/>
             <Route path='/shop' element={<Shop/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/service' element={<Service/>}/>
             <Route path='/blog' element={<Blog/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/signin' element={<Sign></Sign>}/>
             <Route path='/signup' element={<SignUp></SignUp>}/>
          </Route>
         </Routes>
      </Router>
    </>
  );
}

export default App;
