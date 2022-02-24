import './App.css';
import Home from './components/Home.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Profile from './components/Profile.js'
import  Login from './components/Login.js'
import  SignUp from './components/SignUp.js'
import JobSeekerRegisterForm from './components/JobSeekerRegisterForm'
import EmployerRegisterForm from './components/EmployerRegisterForm'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>

          </Route>
          <Route path="profile" element={<Profile />}>

          </Route>
          <Route path="login" element={<Login />}/>
          <Route path="signUp" element={<SignUp />}>
            <Route path="employer-register" element={<EmployerRegisterForm/>}/>
            <Route path="job-seeker-register" element={<JobSeekerRegisterForm/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
