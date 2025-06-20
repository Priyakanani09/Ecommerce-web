import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Blog from "./Blog"
import Product from './Product';
import Login from './Login';
import Register from './Register';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="product" element={ <Product/> } />
        <Route path="blog" element={ <Blog/> } />
        <Route path="login" element={ <Login /> } />
        <Route path="register" element={ <Register /> } />
      </Routes>
    </div>
  );
}

export default App;
