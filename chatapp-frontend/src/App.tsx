import React, {useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ConversationPage from './pages/ConversationPage';
import ConversationChannelPage from './pages/ConversationChannelPage';
import { User } from './utils/types';
import { AuthContext } from './utils/context/AuthContext';







function App() {
  const [user, setUser] = useState<User>();
  return (
    <>
    <AuthContext.Provider value={{ user, updateAuthUser: setUser}}>
    <Router>
        <Routes>
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/conversations' element={<ConversationPage/>} >
             <Route path=':id' element={<ConversationChannelPage/>} /> 
          </Route>
        </Routes>
      </Router>
      </AuthContext.Provider>
    </>
  
  );
}

export default App;
