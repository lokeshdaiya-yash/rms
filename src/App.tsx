/**
 * @since March 2022
 * @author Sunil Bhawsar
 * @desc Routing for reusable components
 * 
*/
import "./app.scss"
import { PtgUiLogin } from './components/auth/login/Login';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './Route/route/private-route';
import PublicRoute from './Route/route/public-route';
import Layout from './layout/layout/Layout';
import { ToastContainer } from 'react-toastify'

export function App() {
  return (
    <div>
      <Routes>
        {/*-----Public routes-----*/}
        <Route path="/" element={<PublicRoute><PtgUiLogin /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><PtgUiLogin /></PublicRoute>} />
        {/*-----Layout in private routes-----*/}
        <Route path="*" element={<PrivateRoute><Layout /></PrivateRoute>} />        
      </Routes>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
