package com.chess.pk.repository;

import com.chess.pk.model.UserCourses;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserCourseRepository extends JpaRepository<UserCourses, String> {
    List<UserCourses> findByUserId(String userId);
}
