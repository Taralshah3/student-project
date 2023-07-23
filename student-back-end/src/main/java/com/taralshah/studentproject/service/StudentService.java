package com.taralshah.studentproject.service;

import com.taralshah.studentproject.model.Student;
import com.taralshah.studentproject.repository.StudentRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Student not found with id: " + id));
    }


    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    public Optional<Student> updateStudent(Long id, Student studentDetails) {
        Optional<Student> studentData = studentRepository.findById(id);

        if (studentData.isPresent()) {
            Student student = studentData.get();
            student.setName(studentDetails.getName());
            student.setSchoolType(studentDetails.getSchoolType());
            studentRepository.save(student);
        }

        return studentData;
    }
}
