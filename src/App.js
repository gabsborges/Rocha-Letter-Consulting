import React,{ useEffect } from 'react';
import './App.css';
<<<<<<< HEAD
import { createBrowserRouter } from 'react-router-dom';
=======
import { BrowserRouter, Routes, Route} from "react-router-dom";
>>>>>>> e2b68bce88d476b3e7777239c3c69409b88a4fc3
import Home from './pages/Home';
import ThanksYouPage from './pages/ThankYouPage';
import NonPage from './pages/NonPage';

<<<<<<< HEAD
const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <Home />
  },
  {
    path: '/obrigado',
    element: <ThanksYouPage />
  },
  {
    path: '*',
    element: <NonPage />
  }
])

export { router }
=======
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
>>>>>>> e2b68bce88d476b3e7777239c3c69409b88a4fc3
