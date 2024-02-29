package com.chess.chess.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chess.chess.model.student;



public interface studentrepo extends JpaRepository<student, Long> {

     student findByEmailid(String emailid);

    // void deleteEntityByStudent(String email);

  
}