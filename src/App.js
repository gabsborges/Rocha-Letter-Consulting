import React,{ useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import ThanksYouPage from './pages/ThankYouPage';

function App() {
  useEffect (()=>{
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src="https://paginas.rocks/scripts/capture/capture.js";
    document.body.appendChild(script);
    return()=>{
      document.body.removeChild(script);
    };
},[])
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/obrigado" element={<ThanksYouPage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
