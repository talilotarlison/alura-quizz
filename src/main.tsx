import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from './pages/Game.tsx';
import NoPage from './pages/NoPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App />}/>
        <Route path="/game" element={<Game/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </BrowserRouter>



  </React.StrictMode>,
)
