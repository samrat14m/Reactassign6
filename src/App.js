import { BrowserRouter as Router, Routes, Route ,Link } from "react-router-dom";
import Student from "./components/Students";
import Contact from "./components/Contact";
import Detail from "./components/Detail"
import Home from "./components/Home";
import Editstudent from "./components/EditStudent";
import AddStudent from "./components/AddStudent";

function App() {
  return (
    <Detail>
      <div className="App">
        <Router>
          <div class="navbar navbar-expand-lg bg-dark" id='navBar'>
          <div style={{color:"magenta" ,marginRight:"30vw", fontSize:"150%"}}> SAMRAT</div>
          <div><Link to="/"><button className='btn btn-outline-light'>Home </button></Link></div>
          <div><Link to={'/student'}><button className='btn btn-outline-light'>Student </button></Link></div>
          <div><Link to={'contact'}><button className='btn btn-outline-light'>Contact  </button></Link></div>
      </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student/add/:id" element={<AddStudent />} />
            <Route path="/student/edit/:id" element={<Editstudent />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>
      </div>
    </Detail>
  );
}

export default App;