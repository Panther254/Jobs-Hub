import './App.css';
import Home from './components/Home.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Profile from './components/Profile.js'
import  Login from './components/Login.js'
import  SignUp from './components/SignUp.js'




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signUp" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
