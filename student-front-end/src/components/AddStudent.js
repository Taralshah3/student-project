import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
    const [studentName, setStudentName] = useState("");
    const [schoolType, setSchoolType] = useState("College");

    const addStudent = () => {
        axios.post('http://localhost:8080/api/students', { name: studentName, schoolType: schoolType })
            .then(response => {
                setStudentName("");
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    return (
        <div style={{marginLeft: "10px"}}>
            <h2>Add Student</h2>
            <h4>What is the student's name?</h4>
            <input type="text" value={studentName} onChange={e => setStudentName(e.target.value)} placeholder="Student Name" />
            <br/>
            <h4>What type of school is the student in?</h4>
            <select value={schoolType} onChange={(e) => setSchoolType(e.target.value)}>
                        <option value="College">College</option>
                        <option value="High School">High School</option>
            </select>
            <h4></h4>
            <br/>
            <button onClick={addStudent}>Add Student</button>
        </div>
    )
}

export default AddStudent;
