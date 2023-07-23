package com.taralshah.studentproject.repository;
import com.taralshah.studentproject.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
