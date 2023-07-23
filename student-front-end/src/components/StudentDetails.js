import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StudentDetails = () => {
  const { id } = useParams();
  const [studentName, setStudentName] = useState('');
  const [schoolType, setSchoolType] = useState("College");

  useEffect(() => {
    axios.get(`http://localhost:8080/api/students/${id}`)
      .then(response => {
        setStudentName(response.data.name);
      })
      .catch(error => console.error(`Error: ${error}`));
  }, [id]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/api/students/${id}`, { name: studentName, schoolType: schoolType })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  return (
    <form onSubmit={handleFormSubmit} style={{marginLeft: "10px"}}>
        <h2>Modify Student</h2>

      <label>
        Modify student's name:
        <input style={{marginLeft: "10px"}} type="text" value={studentName} onChange={(event) => setStudentName(event.target.value)} />
      </label>
      <br></br>
      <label>
        Modify student's school: 
      <select style={{marginLeft: "10px"}} value={schoolType} onChange={(e) => setSchoolType(e.target.value)}>
                        <option value="College">College</option>
                        <option value="High School">High School</option>
      </select>
      </label>
      <br/>
      <br/>
      <button type="submit">Save</button>
    </form>
  )
}

export default StudentDetails;
