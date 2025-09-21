import { createBrowserRouter } from 'react-router';
import HomePage from '../pages/home/HomePage';
import Signup from '../pages/signup/Signup';
import Ecommerce from '../pages/Product/Product';
import Login from '../pages/login/Login';
import DetailPage from '../pages/Product/DetailPage';  
import  useAuth  from '../components/auth/isLogin';
import { Navigate } from 'react-router';
interface ProtectedRouteProps {
  element: React.ReactNode;
}

// Protected Route Component (Auth Guard)
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  if (!useAuth()) {
    return <Navigate to="/login" />;
  }
  return <>{element}</>;
};

export const routes = createBrowserRouter([
  {
    path: '/',
    element: 
    <HomePage />,
    children: [
      {
        path: '/',
        element:<ProtectedRoute element={<Ecommerce />}/> 
      },
      {
        path: 'product/:id',   
        element: <ProtectedRoute element={<DetailPage />} />,
      },
    ],
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);


