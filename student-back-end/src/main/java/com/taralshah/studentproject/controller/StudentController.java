package com.taralshah.studentproject.controller;

import com.taralshah.studentproject.model.Student;
import com.taralshah.studentproject.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getStudents() {
        return studentService.getStudents();
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return studentService.addStudent(student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable("id") long id, @RequestBody Student studentDetails) {
        Optional<Student> studentData = studentService.updateStudent(id, studentDetails);

        return studentData.isPresent() ? ResponseEntity.ok().body(studentData.get()) : ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }

}
