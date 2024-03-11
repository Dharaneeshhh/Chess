package com.chess.pk.service.impl;

import static org.springframework.http.HttpStatus.NOT_FOUND;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.chess.pk.dto.request.CourseRequest;
import com.chess.pk.dto.response.CourseResponse;
import com.chess.pk.model.Courses;
import com.chess.pk.repository.CourseRepository;
import com.chess.pk.service.CourseService;

// import lombok.RequiredArgsConstructor;

@SuppressWarnings("null")
@Service
// @RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {
    @Autowired

    private CourseRepository courseRepository;

    @Override
    public List<CourseResponse> getAllCourses() {
        List<Courses> courses = courseRepository.findAll();
        return courses.stream()
                      .map(this::mapEntityToResponse)
                      .collect(Collectors.toList());
    }

    @Override
    public CourseResponse getCourseById(Long courseId) {
        Courses course = courseRepository.findById(courseId)
                                         .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Course not found with id: " + courseId));
        return mapEntityToResponse(course);
    }

    @Override
    public CourseResponse createCourse(CourseRequest courseRequest) {
        Courses course = mapRequestToEntity(courseRequest);
        Courses createdCourse = courseRepository.save(course);
        return mapEntityToResponse(createdCourse);
    }

    @Override
    public CourseResponse updateCourse(Long courseId, CourseRequest courseRequest) {
        Courses existingCourse = courseRepository.findById(courseId)
                                                 .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Course not found with id: " + courseId));

        existingCourse.setContent(courseRequest.getContent());

        Courses updatedCourse = courseRepository.save(existingCourse);
        return mapEntityToResponse(updatedCourse);
    }

    @Override
    public void deleteCourse(Long courseId) {
        courseRepository.deleteById(courseId);
    }

    private Courses mapRequestToEntity(CourseRequest courseRequest) {
        Courses course = new Courses();
        course.setCourseName(courseRequest.getCourseName());
        course.setCourseId(courseRequest.getCourseId());
        course.setContent(courseRequest.getContent());
        return course;
    }

    private CourseResponse mapEntityToResponse(Courses course) {
        CourseResponse courseResponse = new CourseResponse();
        courseResponse.setCourseId(course.getCourseId());
        courseResponse.setCourseName(course.getCourseName());
        courseResponse.setContent(course.getContent());
        return courseResponse;
    }

}
