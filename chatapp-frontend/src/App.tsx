import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/conversations' element={<div>Conversations</div>} />
          <Route path='/signin' element={<div>Signin</div>} /> 
        </Routes>
      </Router>
    </>
  
  );
}

export default App;
