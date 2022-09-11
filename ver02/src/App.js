import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import SetNav from './components/Navbar/SetNav';

const App = () => {
  return (
    <BrowserRouter>
      <SetNav></SetNav>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App