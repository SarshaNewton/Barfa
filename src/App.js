import React from 'react';
import Home from './Home.js';
import Events from './Events.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn.js';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events/:eventName" element={<Events />} />
          <Route exact path='/SignIn' element={<SignIn/>} />
        </Routes>
      </Router>
  );
}

export default App;
