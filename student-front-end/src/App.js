import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import StudentDetails from './components/StudentDetails';
import './App.css';
import SearchStudent from './components/SearchStudent';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="navbar">
            <li> 
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-student">Add Student</Link>
            </li>
            <li>
              <Link to="/search-student">Search Student</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/search-student" element={<SearchStudent />} />
          <Route path="/student-details" element={<StudentDetails />} />
          <Route path="/modify-student/:id" element={<StudentDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
