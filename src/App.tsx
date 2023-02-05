import React from 'react';
import './welcome.css';
import './signup.css';
import './signin.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Welcome from './screens/Welcome';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
