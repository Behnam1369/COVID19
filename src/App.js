import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Continents from './components/Continents';
import './App.scss';
import Countries from './components/Countries';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Continents />} />
          <Route path="/Countries/:continent" element={<Countries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
