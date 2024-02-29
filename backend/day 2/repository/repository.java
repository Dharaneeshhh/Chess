package com.chess.chess.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.chess.chess.model.model;


public interface repository extends JpaRepository<model, Long> {

  
}