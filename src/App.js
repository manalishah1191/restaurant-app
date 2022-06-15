// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import NavBar from './Component/Layout/NavBar';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import Home from "./Component/Pages/Home";
// import About from "./Component/Pages/About";
// import Menu from "./Component/Pages/Menu";
// import Offer from "./Component/Pages/Offer";
// import Contact from "./Component/Pages/Contact";
// import Navbar from './Component/Layout/Navbar';

function App() {
  return (
    <>
    {/* <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/menu" element={<Menu/>} />
        <Route exact path="/offer" element={<Offer/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route path='*' element={<Home/>}/>
      </Routes>
      </Router> */}
    <NavBar/>
    
    </>
       
  );
}

export default App;
