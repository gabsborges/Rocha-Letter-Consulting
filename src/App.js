import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ThanksYouPage from './pages/ThankYouPage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="/obrigado" element={<ThanksYouPage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
