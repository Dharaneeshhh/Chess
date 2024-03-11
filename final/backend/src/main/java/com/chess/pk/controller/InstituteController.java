package com.chess.pk.controller;

import static com.chess.pk.utils.MyConstant.INSTITUTE;
import static com.chess.pk.utils.MyConstant.INSTITUTELIST;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.chess.pk.dto.request.InstituteRequest;
import com.chess.pk.dto.response.InstituteResponse;
import com.chess.pk.service.InstituteService;

@RestController
@RequestMapping(INSTITUTE)
public class InstituteController {
    @Autowired

    private final InstituteService instituteService;

    public InstituteController(InstituteService instituteService) {
        this.instituteService = instituteService;
    }

    @GetMapping(INSTITUTELIST)
    public ResponseEntity<List<InstituteResponse>> getAllInstitutes() {
        List<InstituteResponse> institutes = instituteService.getAllInstitutes();
        return ResponseEntity.ok(institutes);
    }

    @GetMapping("/{instituteId}")
    public ResponseEntity<InstituteResponse> getInstitute(@PathVariable Long instituteId) {
        InstituteResponse institute = instituteService.getInstituteById(instituteId);
        return ResponseEntity.ok(institute);
    }

    @PostMapping
    public ResponseEntity<InstituteResponse> createInstitute(@RequestBody InstituteRequest instituteRequest) {
        InstituteResponse createdInstitute = instituteService.createInstitute(instituteRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdInstitute);
    }

    @PutMapping("/{instituteId}")
    public ResponseEntity<InstituteResponse> updateInstitute(@PathVariable Long instituteId, @RequestBody InstituteRequest instituteRequest) {
        InstituteResponse updatedInstitute = instituteService.updateInstitute(instituteId, instituteRequest);
        return ResponseEntity.ok(updatedInstitute);
    }

    @DeleteMapping("/{instituteId}")
    public ResponseEntity<Void> deleteInstitute(@PathVariable Long instituteId) {
        instituteService.deleteInstitute(instituteId);
        return ResponseEntity.noContent().build();
    }
}
