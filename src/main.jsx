import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import NotFound from './pages/Notfound.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Topup from './pages/Topup.jsx';
import Home from './pages/Home.jsx';
import Account from './pages/Account.jsx';
import Transaction from './pages/Transaction.jsx';
import Bayar from './pages/Bayar.jsx';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/bayar"
        element={<Bayar />}
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
        path="/akun"
        element={<Account />}
      />
      <Route
        path="/topup"
        element={<Topup />}
      />
      <Route
        path="/transaction"
        element={<Transaction />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  </BrowserRouter>
);
