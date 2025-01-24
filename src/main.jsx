import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.jsx';
import NotFound from './pages/Notfound.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Topup from './pages/Topup.jsx';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<App />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/topup"
        element={<Topup />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  </BrowserRouter>
);
