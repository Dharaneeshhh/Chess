package com.chess.pk.service;

import com.chess.pk.dto.request.UserCourseRequest;
import com.chess.pk.dto.response.UserCourseResponse;

import java.util.List;

public interface UserCourseService {
    UserCourseResponse enrollUserInCourse(UserCourseRequest userCourseRequest);
    List<UserCourseResponse> getCoursesEnrolledByUser(String userId);
    List<UserCourseResponse> getAllUserCourses(); 
}
