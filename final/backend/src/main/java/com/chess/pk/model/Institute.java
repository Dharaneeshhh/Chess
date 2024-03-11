
package com.chess.pk.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "institutes")
@Data
public class Institute {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "institute_id")
    private Long id;

    @Column(name = "institute_name")
    private String name;

    @Column(name = "institute_address")
    private String address;

    @Column(name = "contact_number")
    private String contactNumber;
}
