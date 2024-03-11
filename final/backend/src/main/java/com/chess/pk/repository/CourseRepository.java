package com.chess.pk.repository;

import com.chess.pk.model.Courses;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CourseRepository extends JpaRepository<Courses, Long> {
    Optional<Courses> findByCourseName(String courseName);
}
