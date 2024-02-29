package com.chess.chess.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chess.chess.model.academy;




public interface academyrepo extends JpaRepository<academy, Long> {

    academy findByEmail(String email);

  
}