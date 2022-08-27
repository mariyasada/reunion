import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { SellingPage } from './pages/Home/sellPage/Sell';
import Favorite from './pages/favorites/Favorite';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sell" element={<SellingPage/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
      </Routes>
      <Toaster
        position="top-right"
        toastOptions={{ className: "toast-display", duration: 3000 }}
      /> 
     
    </div>
  );
}

export default App;
