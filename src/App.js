import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import ThanksYouPage from './pages/ThankYouPage';
import NonPage from './pages/NonPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/obrigado' element={<ThanksYouPage />}/>
          <Route path='*' element={<NonPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;