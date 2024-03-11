package com.chess.pk.service;

import com.chess.pk.dto.request.LoginRequest;
import com.chess.pk.dto.request.RegisterRequest;
import com.chess.pk.dto.response.LoginResponse;
import com.chess.pk.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

}
