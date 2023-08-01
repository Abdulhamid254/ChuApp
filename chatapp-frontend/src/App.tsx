import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AuthenticationPage from './pages/AuthenticationPage';


function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<AuthenticationPage/>} />
          <Route path='/conversations' element={<div>Conversations</div>} />
          <Route path='/signin' element={<div>Signin</div>} /> 
        </Routes>
      </Router>
    </>
  
  );
}

export default App;
