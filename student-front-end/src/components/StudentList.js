import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/StudentList.css';
import { Link } from 'react-router-dom';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [filter, setFilter] = useState("nofilter");

    useEffect(() => {
        axios.get('http://localhost:8080/api/students')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => console.error(`Error: ${error}`));
    }, []);

    const deleteStudent = (id) => {
        axios.delete(`http://localhost:8080/api/students/${id}`)
            .then(response => {
                setStudents(students.filter(student => student.id !== id));
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    const filteredStudents = students.filter(student => {
        if (filter === "nofilter") return true;
        return student.schoolType === filter;
    });

    return (
        <div>
            <h2 style={{marginLeft: "10px"}}>All Students</h2>
            <div style={{marginLeft: "10px"}}>
            Filter:
                <select style={{marginLeft: "10px"}} value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="nofilter">No Filter</option>
                    <option value="College">College</option>
                    <option value="High School">High School</option>
                </select>
            </div>
            
            {filteredStudents.map(student => (                
                <div key={student.id} className="student-info">
                    <p>Student ID: {student.id}</p>
                    <p>Student Name: {student.name}</p>
                    <p>School Type: {student.schoolType}</p>
                    <button>
                        <Link to={`/modify-student/${student.id}`}>Modify Student Info</Link>
                    </button>
                    <button onClick={() => deleteStudent(student.id)}>Delete</button>
                    
                </div>
            ))}
        </div>
    )
}

export default StudentList;
