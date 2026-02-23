package com.example.demo.model.repository;

import com.example.demo.model.entity.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Long> {
    List<Hotel> findByCityContainingIgnoreCase(String city);

    List<Hotel> findByNameContainingIgnoreCase(String name);

    List<Hotel> findByOwnerId(Long ownerId);
}
