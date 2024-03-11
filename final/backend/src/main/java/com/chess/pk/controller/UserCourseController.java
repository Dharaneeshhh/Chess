package com.chess.pk.controller;

import com.chess.pk.dto.request.UserCourseRequest;
import com.chess.pk.dto.response.UserCourseResponse;
import com.chess.pk.service.UserCourseService;
import com.chess.pk.utils.MyConstant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(MyConstant.USERCOURSE)
public class UserCourseController {

    @Autowired
    private UserCourseService userCourseService;

    public UserCourseController(UserCourseService userCourseService) {
        this.userCourseService = userCourseService;
    }

    @GetMapping
    public ResponseEntity<List<UserCourseResponse>> getAllUserCourses() {
        List<UserCourseResponse> userCourses = userCourseService.getAllUserCourses();
        return ResponseEntity.ok(userCourses);
    }

    @PostMapping
    public ResponseEntity<UserCourseResponse> enrollUserInCourse(@RequestBody UserCourseRequest userCourseRequest) {
        UserCourseResponse enrolledCourse = userCourseService.enrollUserInCourse(userCourseRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(enrolledCourse);
    }
}
