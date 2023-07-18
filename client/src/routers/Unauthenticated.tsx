import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './../Pages/Signup/Signup.component';
import Signup from './../Pages/Login/Login.component';

const Unauthenticated = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/*' element={<Navigate to='/login' />} />
    </Routes>
  );
};

export default Unauthenticated;
