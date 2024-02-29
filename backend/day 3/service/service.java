package com.chess.chess.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.chess.chess.model.academy;
import com.chess.chess.model.course;
import com.chess.chess.model.model;
import com.chess.chess.model.student;
import com.chess.chess.repository.academyrepo;
import com.chess.chess.repository.courserepo;
import com.chess.chess.repository.repository;
import com.chess.chess.repository.studentrepo;

@Service
public class service {
  
  @Autowired
  private repository repository;
  
  @Autowired
  private studentrepo studentRepo;
  
  @Autowired
  private academyrepo academyRepo;
  
  @Autowired
  private courserepo courseRepo;
  
  // Post methods
  public boolean createBook(model m) {
    return repository.save(m) != null;
  }
  
  public boolean createacademy(academy ac) {
    return academyRepo.save(ac) != null ? true:false;
  }
  
  public String createstudent(student sc) {
    return studentRepo.save(sc) != null ? "Student added" : "Student not added";
  }
  
  public boolean createcourse(course c) {
    return courseRepo.save(c) != null;
  }
  
  // Get methods
  public List<model> getAllBookings() {
    return repository.findAll();
  }
  
  public List<academy> getAllacademy() {
    return academyRepo.findAll();
  }
  
  public List<student> getAllStudents() {
    return studentRepo.findAll();
  }
  
  public List<course> getAllCourses() {
    return courseRepo.findAll();
  }
  
  // Update methods
  public academy updateAcademyByEmail(String email, academy updatedAcademy) {
    academy existingAcademy = academyRepo.findByEmail(email);
    if (existingAcademy != null) {
      existingAcademy.setPlace(updatedAcademy.getPlace());
    //   existingAcademy.setMobile(updatedAcademy.getMobile());
    //   existingAcademy.setImageurl(updatedAcademy.getImageurl());
    //   existingAcademy.setEmail(updatedAcademy.getEmail());
    //   existingAcademy.setLocation(updatedAcademy.getLocation());
    //   existingAcademy.setDescription(updatedAcademy.getDescription());
      return academyRepo.save(existingAcademy);
    } else {
      return null;
    }
  }
  
  public student updateStudentByEmail(String email, student updatedStudent) {
    student existingStudent = studentRepo.findByEmailid(email);
    if (existingStudent != null) {
      existingStudent.setFirstname(updatedStudent.getFirstname());
      existingStudent.setLastname(updatedStudent.getLastname());
      existingStudent.setFathersname(updatedStudent.getFathersname());
      existingStudent.setEmailid(updatedStudent.getEmailid());
    //   existingStudent.setMothersname(updatedStudent.getMothersname());
      existingStudent.setMobile(updatedStudent.getMobile());
    //   existingStudent.setAlternatemobile(updatedStudent.getAlternatemobile());
      existingStudent.setAge(updatedStudent.getAge());
      existingStudent.setLevel(updatedStudent.getLevel());
      existingStudent.setAddress(updatedStudent.getAddress());
    //   existingStudent.setGender(updatedStudent.getGender());
      return studentRepo.save(existingStudent);
    } else {
      return null;
    }
  }

  // public List<academy> getAllacademy() {
  //   // TODO Auto-generated method stub
  //   throw new UnsupportedOperationException("Unimplemented method 'getAllacademy'");
  // }

public List<course> getAllcourse() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getAllcourse'");
}

// public List<student> getAllstudent() {
//     // TODO Auto-generated method stub
//     throw new UnsupportedOperationException("Unimplemented method 'getAllstudent'");
// }

// public boolean createcourse(course c) {
//     // TODO Auto-generated method stub
//     throw new UnsupportedOperationException("Unimplemented method 'createcourse'");
// }

// public boolean createBook(model m) {
//     // TODO Auto-generated method stub
//     throw new UnsupportedOperationException("Unimplemented method 'createBook'");
// }

// public boolean createacademy(academy ac) {
//     // TODO Auto-generated method stub
//     throw new UnsupportedOperationException("Unimplemented method 'createacademy'");
// }

// public String createstudent(student sc) {
//     // TODO Auto-generated method stub
//     throw new UnsupportedOperationException("Unimplemented method 'createstudent'");
// }

// public student updateStudent(String email, student updateModel) {
//     // TODO Auto-generated method stub
//     throw new UnsupportedOperationException("Unimplemented method 'updateStudent'");
// }

public academy updateAcademy(String email, academy updateModel) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'updateAcademy'");
}
}
