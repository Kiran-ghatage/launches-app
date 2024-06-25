import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LaunchesList from './components/LaunchesList';
import './styles/App.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<LaunchesList />} />
          <Route path="/launches" element={<LaunchesList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
