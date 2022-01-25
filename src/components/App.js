import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from './Layout'
import Main from '../pages/Main';
import Fecha from '../pages/Fechas'

function App() {
  const[date, setDate] = useState();

  return (
      <BrowserRouter>
          
          <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route exact path="/fecha" element={<Fecha/>} />          
          </Routes>      



      </BrowserRouter>


      
  );
}

export default App;
