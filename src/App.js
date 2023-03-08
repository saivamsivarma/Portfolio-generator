// install react router dom using: npm i -D react-router-dom command

// import logo from './logo.svg';
import './App.css'; // importing css file
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // importing dependency from the module
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
    },
    // image: { preview: '', raw: '' }
  })
  const [step, setStep] = useState(localStorage.getItem('step') ? parseInt(localStorage.getItem('step')) : 0); // stepper contains value; setStepper update the stepper value;
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home step={step} setStep={setStep} user={user} setUser={setUser} />} /> {/* When Brower hits "http:localhost:3000/"" it will display home page*/}
        <Route path='/template' element={<Template user={user}/>} />
      </Routes>
    </Router>
  );
}

export default App;
