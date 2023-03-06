// install react router dom using: npm i -D react-router-dom command

// import logo from './logo.svg';
import './App.css'; // importing css file
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // importing dependency from the module
import { Home } from "./pages/Home"; // importing Home page from the pages dir
import { Template } from './pages/Template';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/> {/* When Brower hits "http:localhost:3000/"" it will display home page*/}
        <Route path='/template' element={<Template/>}/>
      </Routes>
    </Router>
  );
}

export default App;
