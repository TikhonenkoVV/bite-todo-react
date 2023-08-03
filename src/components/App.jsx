
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';


const Welcome = lazy(() => import('../pages/Welcome'));


export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      {/* <Route path='/auth/:actionId' element={<Register />} /> */}
      {/* <Route path='/home' element={<Home />} /> */}
      {/* <Route path='/home/:boardName' element={<Home />} /> */}
      <Route path="*" element={<Welcome />} />
    </Routes>

  );
};