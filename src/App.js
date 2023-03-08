// install react router dom using: npm i -D react-router-dom command

// import logo from './logo.svg';
import './App.css'; // importing css file
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // importing dependency from the module
import { Home } from "./pages/Home"; // importing Home page from the pages dir
import { Template } from './pages/Template';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : {
    basicDetails: {
      firstName: '',
      lastName: '',
      contact: '',
      email: '',
    },
    role: '',
    summary: '',
    socialLinks: {
      linkedIn: '',
      github: '',
      dribbble: ''
    }
  })
  const [step, setStep] = useState(localStorage.getItem('step') ? parseInt(localStorage.getItem('step')) : 0); // stepper contains value; setStepper update the stepper value;
  const updateStep = (step) =>{
    setStep(step);
    localStorage.setItem('step',step);
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element={step < 4 ? <Home step={step} updateStep={updateStep} user={user} setUser={setUser} /> : <Navigate replace to="/template"/>} /> {/* When Brower hits "http:localhost:3000/"" it will display home page*/}
        <Route path='/template' element={<Template user={user} updateStep={updateStep}/>} />
      </Routes>
    </Router>
  );
}

export default App;
