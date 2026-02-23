package com.example.demo.model.service;

import com.example.demo.model.entity.RoomType;
import com.example.demo.model.repository.RoomTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomTypeService {

    @Autowired
    private RoomTypeRepository roomTypeRepository;

    public List<RoomType> getRoomTypesByHotel(Long hotelId) {
        return roomTypeRepository.findByHotelId(hotelId);
    }

    public RoomType saveRoomType(RoomType roomType) {
        return roomTypeRepository.save(roomType);
    }
}
