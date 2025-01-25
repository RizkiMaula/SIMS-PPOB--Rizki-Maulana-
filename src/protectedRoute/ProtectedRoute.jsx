import useLocalStorage from '../hooks/useLocalStorage';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = ({ content }) => {
  const [token, setToken] = useLocalStorage('authToken', '');

  if (!token || token === 'undefined') {
    return <Navigate to={'/login'} />;
  }
  return <div> {content || <Outlet />} </div>;
};

export default ProtectedRoute;
