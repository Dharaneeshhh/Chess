package com.chess.pk.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chess.pk.model.Institute;

@Repository
public interface InstituteRepository extends JpaRepository<Institute, Long> {
}
