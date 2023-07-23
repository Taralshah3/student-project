import React, { useState } from 'react';
import axios from 'axios';
import '../css/StudentList.css';

const SearchStudent = () => {
    const [id, setId] = useState('');
    const [student, setStudent] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.get(`http://localhost:8080/api/students/${id}`)
            .then((response) => {
                setStudent(response.data);
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    return (
        <div style={{marginLeft: "10px"}}>
            <h2>Search Student</h2>
            <label>
                Student ID:
                <input style={{marginLeft: "10px"}} type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </label>
            <button onClick={handleSubmit}>Search</button>
            {student && (
                <div>
                    <h2>Student Found</h2>
                    <div className="student-info">
                        <p>ID: {student.id}</p>
                        <p>Name: {student.name}</p>
                        <p>School Type: {student.schoolType}</p>
                    </div>
                </div>
                
            )}
        </div>
    );
}

export default SearchStudent;
