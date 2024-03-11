package com.chess.pk.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.chess.pk.dto.response.BasicResponse;
import com.chess.pk.dto.response.UserResponse;
import com.chess.pk.model.User;
import com.chess.pk.repository.UserRepository;
import com.chess.pk.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class UserServiceImpl implements UserService {
    
    private final UserRepository userRepository;
    
    
    @Override
    public BasicResponse<UserResponse> getAllUser() {
        List<User> users= userRepository.findAll();
        List<UserResponse> userResponses= users.stream().map(user -> UserResponse.builder()
        .id(user.getId())
        .name(user.getName())  
        .email(user.getEmail())
        .role(user.getRole())
        .address(user.getAddress())
        .build())
        .collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder()
        .message("User Data fetched")
        .data(userResponses)
        .build();
    }

}
