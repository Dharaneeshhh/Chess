package com.chess.chess.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import com.chess.chess.service.service;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.chess.chess.model.academy;
import com.chess.chess.model.course;
import com.chess.chess.model.model;
import com.chess.chess.model.student;

import java.util.List;
// import org.springframework.web.bind.annotation.RequestParam;

//import com.bala.events.service.Service;
@CrossOrigin
@RestController
@RequestMapping("/chess")

public class controller {
    @Autowired
    service r;
    @Autowired
    service ar;
    @Autowired
    service cr;
    @Autowired
    service sr;
    // Post methodes
    @Tag(name="post the details",description = "post")
    @PostMapping("/post/booking")
    public boolean createBook(@RequestBody model m) {
        return r.createBook(m);
    }

    @PostMapping("/post/academy")
    public boolean createacademy(@RequestBody academy ac) {
        return r.createacademy(ac);
    }

    @PostMapping("/post/student")
    public String createstudent(@RequestBody student sc) {
        return r.createstudent(sc);
    }

    @PostMapping("/post/course")
    public boolean createcourse(@RequestBody course c) {
        return r.createcourse(c);
    }

    // Get methodes
    @GetMapping("/getbookings")
    public List<model> getAllBookings() {
        return r.getAllBookings();
    }

    @GetMapping("/getacademy")
    public List<academy> getAllacademy() {
        return r.getAllacademy();
    }

    @GetMapping("/getcourse")
    public List<course>  getAllCourses() {
        return r. getAllCourses
        ();
    }

    @GetMapping("/getstudent")
    public List<student> getAllStudent() {
        return r.getAllStudents();
    }

 



    // @update methods
    @PutMapping("/putacademy/{email}")
    public ResponseEntity<academy> updateAcademyByEmail(@PathVariable String email,@RequestBody academy updateModel){
        academy result=ar.updateAcademyByEmail(email,updateModel);
        if(result !=null){
            return ResponseEntity.ok(result);
        }else{
             return ResponseEntity.notFound().build();
        }
    }
    
    @PutMapping("/put/student/{email}")
    public ResponseEntity<student> updateStudentByEmail(@PathVariable String email,@RequestBody student updateModel){
        student result=sr.updateStudentByEmail(email,updateModel);
        if(result !=null){
            return ResponseEntity.ok(result);
        }else{
             return ResponseEntity.notFound().build();
        }
    }
    //@delete methods
}

