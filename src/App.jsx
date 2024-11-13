import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Login';
import Register from './pages/Register';
import ProtectedPage from './pages/Protected';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Portfolio from './pages/Portfolio';
import ResumePage from './pages/Resume';

const App = () => {
  return ( // react can only return one element
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register />} />
        <Route path='/protected' element={<ProtectedPage />} />
        <Route path='/resume' element={<ResumePage />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
