import React from 'react';
import './global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import './app.scss';
import Album from './pages/Album/Album';
import Collection from './pages/Collection/Collection';
import Home from './pages/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />

        <div className='mainContent'>
          <Topbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/album" element={<Album />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
