import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<div>Hello name</div>} />
          <Route path='/conversations' element={<div>Conversations</div>} />
          <Route path='/signin' element={<div>Signin</div>} /> 
        </Routes>
      </Router>
    </>
  
  );
}

export default App;
