package com.chess.pk.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.chess.pk.dto.request.CourseRequest;
import com.chess.pk.dto.response.CourseResponse;

@Service
public interface CourseService {
    List<CourseResponse> getAllCourses();
    CourseResponse getCourseById(Long courseId);
    CourseResponse createCourse(CourseRequest courseRequest);
    CourseResponse updateCourse(Long courseId, CourseRequest courseRequest);
    void deleteCourse(Long courseId);
}
