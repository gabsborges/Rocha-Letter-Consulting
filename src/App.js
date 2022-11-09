import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ThanksYouPage from './pages/ThankYouPage';
import NonPage from './pages/NonPage';

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