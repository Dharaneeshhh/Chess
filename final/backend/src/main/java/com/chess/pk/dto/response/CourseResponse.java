package com.chess.pk.dto.response;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseResponse {
    private Long courseId;
    
    private String courseName;
    private String content;
    private String message;
}


