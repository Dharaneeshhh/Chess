package com.chess.pk.service;

import java.util.List;

import com.chess.pk.dto.request.InstituteRequest;
import com.chess.pk.dto.response.InstituteResponse;

public interface InstituteService {
    List<InstituteResponse> getAllInstitutes();
    InstituteResponse getInstituteById(Long instituteId);
    InstituteResponse createInstitute(InstituteRequest instituteRequest);
    InstituteResponse updateInstitute(Long instituteId, InstituteRequest instituteRequest);
    void deleteInstitute(Long instituteId);
}
