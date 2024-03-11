package com.chess.pk.model;

// import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "courses")
public class Courses {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // @Column(nullable = false)
    private Long courseId;

    // @Column(nullable = false)
    private String courseName;

    // @Column(nullable = false)
    private String content;
  
}
