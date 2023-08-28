import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './LoginPage/Login';
import Profile from './ProfilePage/Profile';
import Home from './HomePage/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element= {<Login /> } />
          <Route path='/login' element={<Login />} />
          <Route path='/profile/:userId' element={<Profile />} />
          <Route path='/feed' element={<Home />} />
      </Routes>
    </BrowserRouter>   
  );
}
export default App;
