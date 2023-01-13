import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Knowledge from "./pages/Knowledge";
import NotFound from "./pages/NotFound";
import Curriculum from "./pages/Curriculum"
import Portfolio from "./pages/Portfolio";
import './App.css';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <div className="home">
          <Navigation />
          <div style={{width: "100%"}}>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/knowledge" element={<Knowledge/>}></Route>
              <Route path="/curriculum" element={<Curriculum/>}></Route>
              <Route path="/portfolio" element={<Portfolio/>}></Route>
              <Route path="/*" element={<NotFound/>}></Route>
            </Routes>
          </div>
        </div>
        
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
