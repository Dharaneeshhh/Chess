package com.chess.pk.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.chess.pk.dto.request.InstituteRequest;
import com.chess.pk.dto.response.InstituteResponse;
import com.chess.pk.model.Institute;
import com.chess.pk.repository.InstituteRepository;
import com.chess.pk.service.InstituteService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class InstituteServiceImpl implements InstituteService {

    private final InstituteRepository instituteRepository;

    @Override
    public List<InstituteResponse> getAllInstitutes() {
        List<Institute> institutes = instituteRepository.findAll();
        return institutes.stream()
                         .map(this::mapEntityToResponse)
                         .collect(Collectors.toList());
    }

    @Override
    public InstituteResponse getInstituteById(Long instituteId) {
        Institute institute = instituteRepository.findById(instituteId)
                                                 .orElseThrow(() -> new RuntimeException("Institute not found with id: " + instituteId));
        return mapEntityToResponse(institute);
    }

    @Override
    public InstituteResponse createInstitute(InstituteRequest instituteRequest) {
        Institute institute = mapRequestToEntity(instituteRequest);
        Institute createdInstitute = instituteRepository.save(institute);
        return mapEntityToResponse(createdInstitute);
    }

    @Override
    public InstituteResponse updateInstitute(Long instituteId, InstituteRequest instituteRequest) {
        Institute existingInstitute = instituteRepository.findById(instituteId)
                                                         .orElseThrow(() -> new RuntimeException("Institute not found with id: " + instituteId));
        existingInstitute.setName(instituteRequest.getName());
        existingInstitute.setAddress(instituteRequest.getAddress());
        existingInstitute.setContactNumber(instituteRequest.getContactNumber());

        Institute updatedInstitute = instituteRepository.save(existingInstitute);
        return mapEntityToResponse(updatedInstitute);
    }

    @Override
    public void deleteInstitute(Long instituteId) {
        instituteRepository.deleteById(instituteId);
    }

    private Institute mapRequestToEntity(InstituteRequest instituteRequest) {
        Institute institute = new Institute();
        institute.setName(instituteRequest.getName());
        institute.setAddress(instituteRequest.getAddress());
        institute.setContactNumber(instituteRequest.getContactNumber());
        return institute;
    }

    private InstituteResponse mapEntityToResponse(Institute institute) {
        InstituteResponse response = new InstituteResponse();
        response.setId(institute.getId());
        response.setName(institute.getName());
        response.setAddress(institute.getAddress());
        response.setContactNumber(institute.getContactNumber());
        return response;
    }
}
