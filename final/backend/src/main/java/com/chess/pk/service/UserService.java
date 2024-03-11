package com.chess.pk.service;

import com.chess.pk.dto.response.BasicResponse;
import com.chess.pk.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}
