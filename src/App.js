import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './LoginPage/Login';
import Profile from './ProfilePage/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element= {<Login /> } />
          <Route path='/login' element={<Login />} />
          <Route path='/profile/:userId' element={<Profile />} />
      </Routes>
    </BrowserRouter>   
  );
}
export default App;
